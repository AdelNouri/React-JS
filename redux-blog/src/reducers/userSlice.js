import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  current,
} from "@reduxjs/toolkit";

import { getAllUsers, createUser, removeUser } from "../services/blogsServices";

const userAdapter = createEntityAdapter();

const initialState = userAdapter.getInitialState();

export const fetchAllUsers = createAsyncThunk("/users/fetchUsers", async () => {
  const response = await getAllUsers();
  console.log(response.data);
  return response.data;
});

export const addNewUser = createAsyncThunk(
  "/users/createNewUser",
  async (user) => {
    const response = await createUser(user);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "/users/deleteUser",
  async (userId) => {
    await removeUser(userId);
    return userId;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllUsers.fulfilled,
        userAdapter.setAll
        // With returning a new result Immer will existing state with whatever we return
      )
      .addCase(addNewUser.fulfilled, userAdapter.addOne)
      .addCase(deleteUser.fulfilled, userAdapter.removeOne);
  },
});

export const { selectAll: selectAllAuthors, selectById: selectAuthorById } =
    userAdapter.getSelectors((state) => state.users);

export default usersSlice.reducer;
