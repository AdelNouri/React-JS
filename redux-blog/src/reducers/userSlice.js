import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        fullname: "adel nouri"
    },
    {
        id: "2",
        fullname: "ali nouri"
    },
    {
        id: "3",
        fullname: "mohammad baghery"
    }
]

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {

    }
})

export default usersSlice.reducer