import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        addUser: (store, action) => {
            return action.payload;
        },
        updateProfile: (store, action) => {},
        removeUser: (store, action) => {
            return null;
        },
    },
});

export default userSlice.reducer;
export const { addUser, updateProfile, removeUser } = userSlice.actions;
