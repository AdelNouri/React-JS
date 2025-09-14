import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import {
  createBlog,
  getAllBlogs,
  removeBlog,
  updateBlog,
} from "../services/blogsServices";

const blogsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.date.localeCompare(b.date),
});

const initialState = blogsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchBlogs = createAsyncThunk("/blogs/fetchBlogs", async () => {
  const response = await getAllBlogs();
  return response.data;
});

export const addNewBlog = createAsyncThunk(
  "/blogs/addNewBlog",
  async (payload) => {
    const response = await createBlog(payload);
    return response.data;
  }
);

export const deleteBlog = createAsyncThunk(
  "/blogs/deleteBlog",
  async (blogId) => {
    await removeBlog(blogId);
    return blogId;
  }
);

export const editBlog = createAsyncThunk(
  "/blogs/editBlog",
  async (editedBlog) => {
    const response = await updateBlog(editedBlog);
    console.log(response);
    return response.data;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    blogUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingBlog = state.entities[id]

      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
      }
    },
    reactionAdded: (state, action) => {
      const { blogId, reaction } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id == blogId);

      if (existingBlog) {
        existingBlog.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "completed";
        blogsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewBlog.fulfilled, blogsAdapter.addOne)
      .addCase(deleteBlog.fulfilled, blogsAdapter.removeOne)
      .addCase(editBlog.fulfilled, (state, action) => {
        console.log(action);
        const { id } = action.payload;
        const editedBlogIndex = state.blogs.findIndex((blog) => blog.id == id);
        state.blogs[editedBlogIndex] = action.payload;
      });
  },
});

// export const selectAllBlogs = (state) => state.blogs.blogs;
// export const selectBlogById = (state, blogId) =>
//   state.blogs.blogs.find((blog) => blog.id == blogId);

export const {
  selectAll: selectAllBlogs,
  selectById: selectBlogById,
  selectIds,
} = blogsAdapter.getSelectors((state) => state.blogs);

export const selectAuthorBlogs = createSelector(
  [selectAllBlogs, (state, authorId) => authorId],
  (blogs, authorId) => blogs.filter((blog) => blog.user === authorId)
);

export const { blogAdded, blogUpdated, blogDeleted, reactionAdded } =
  blogsSlice.actions;

export default blogsSlice.reducer;
