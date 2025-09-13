import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../reducers/blogSlice";
import usersReducer, { fetchAllUsers } from "../reducers/userSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersReducer,
  },
});

store.dispatch(fetchAllUsers());
