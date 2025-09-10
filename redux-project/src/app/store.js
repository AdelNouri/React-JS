import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../fearures/counter/counterSlice";

export const store = configureStore({reducer: counterSlice})