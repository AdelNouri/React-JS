import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "first post",
      content: "content of first post",
      user: "1",
    },
    {
      id: nanoid(),
      date: new Date().toISOString(),
      title: "seconde post",
      content: "content of seconde post",
      user: "3",
    },
  ],
};

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
  },
});

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogById = (state, blogId) =>
  state.blogs.blogs.find((blog) => blog.id == blogId);
export const { blogAdded, blogUpdated, blogDeleted } = blogsSlice.actions;

export default blogsSlice.reducer;
