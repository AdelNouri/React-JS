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
    blogAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { blogAdded } = blogsSlice.actions;

export default blogsSlice.reducer;
