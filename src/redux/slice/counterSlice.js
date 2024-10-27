import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (prevState, action) => prevState + 1,
        decrement: (prevState, action) => prevState - 1,
    }
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;