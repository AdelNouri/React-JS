import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../fearures/counter/counterSlice";

export const store = configureStore({ reducer: { counter: counterSlice } });
console.log(store)

// Api request async
// store.dispatch()

// the outside "thunk creator" function
// const fetchUserById = (userId) => {
//     // the inside "thunk function"
//     return async (dispatch, getState) => {
//         try {
//             // make an async call in the thunk
//             const user = await userAPI.fetchById(userId);
//             // dispatch an action when we get the response back
//             dispatch(userLoaded(user));
//         } catch (err) {
//             // If something went wrong, handle it here
//         }
//     };
// };
