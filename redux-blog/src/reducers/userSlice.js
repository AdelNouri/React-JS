import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { getAllUsers, createUser, removeUser } from "../services/blogsServices";

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
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        console.log(action.payload);
        return action.payload;
        // With returning a new result Immer will existing state with whatever we return
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        return state.filter((user) => user.id != action.payload);
      });
  },
});

export default usersSlice.reducer;
