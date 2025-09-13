import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { createBlog, getAllBlogs, removeBlog } from "../services/blogsServices";

const initialState = {
  blogs: [],
  status: "idle",
  error: null,
};

export const fetchBlogs = createAsyncThunk("/blogs/fetchBlogs", async () => {
  const response = await getAllBlogs();
  return response.data;
});

export const addNewBlog = createAsyncThunk("/blogs/addNewBlog", async payload => {
  const response = await createBlog(payload)
  return response.data
})

export const deleteBlog = createAsyncThunk("/blogs/deleteBlog", async blogId => {
  await removeBlog(blogId)
  return blogId
})

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.blogs.push(action.payload);
      },
      prepare(title, userId, content) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            },
          },
        };
      },
    },
    blogUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingBlog = state.blogs.find((blog) => blog.id == id);

      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
      }
    },
    blogDeleted: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id != action.payload.id);
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
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewBlog.fulfilled , (state, action) => {
        state.blogs.push(action.payload)
      })
      .addCase(deleteBlog.fulfilled, (state, aciton) => {
        state.blogs = state.blogs.filter(blog => blog.id != aciton.payload)
      })
  },
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id == blogId);

export const { blogAdded, blogUpdated, blogDeleted, reactionAdded } =
  blogsSlice.actions;

export default blogsSlice.reducer;
