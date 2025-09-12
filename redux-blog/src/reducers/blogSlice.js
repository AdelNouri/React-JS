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
  },
});

export const { blogAdded } = blogsSlice.actions;

export default blogsSlice.reducer;
