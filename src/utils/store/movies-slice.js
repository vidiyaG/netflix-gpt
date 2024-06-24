import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: { popular: null },
    reducers: {
        addPopularMovies: (state, action) => {
            return { ...state, popular: action.payload };
        },
    },
});

export const { addPopularMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
