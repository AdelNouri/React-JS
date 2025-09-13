import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { getAllUsers } from "../services/blogsServices";

export const fetchAllUsers = createAsyncThunk("/users/fetchUsers", async () => {
  const response = await getAllUsers();

  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
        console.log(action.payload)
      return action.payload;
      // With returning a new result Immer will existing state with whatever we return
    });
  },
});



export default usersSlice.reducer;
