import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "first post",
    content: "content of first post",
  },
  {
    id: nanoid(),
    title: "seconde post",
    content: "content of seconde post",
  },
];

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    blogAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: { id: nanoid(), title, content },
        };
      },
    },
    blogUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingBlog = state.find((blog) => blog.id == id);

      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
      }
    },
  },
});

export const { blogAdded , blogUpdated} = blogsSlice.actions;

export default blogsSlice.reducer;
