import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../services/blogsServices";

const initialState = [
  {
    id: "1",
    fullname: "adel nouri",
  },
  {
    id: "2",
    fullname: "ali nouri",
  },
  {
    id: "3",
    fullname: "mohammad baghery",
  },
];

export const fetchAllUsers = createAsyncThunk("/users/fetchUsers", async () => {
  const response = await getAllUsers();

  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
