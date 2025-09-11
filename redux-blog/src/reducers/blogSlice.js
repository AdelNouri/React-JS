import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    date: new Date().toISOString(),
    title: "first post",
    content: "content of first post",
  },
  {
    id: nanoid(),
    date: new Date().toISOString(),
    title: "seconde post",
    content: "content of seconde post",
  },
];

const blogsSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {},
});

export default blogsSlice.reducer;
