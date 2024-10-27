import { createSlice } from "@reduxjs/toolkit";

const toDoItemsSlice = createSlice({
    name: "toDoItems",
    initialState: [],
    reducers: {
        addItem: (prevState, action) => {
            prevState.push(action.payload);
        },
        deleteItem: (prevState, action) => prevState.filter(item => item.id !== action.payload),
        markAsChecked: (prevState, action) => { 
            prevState.map((item) => {
            if (item.id === action.payload.id) {
                item.checked = action.payload.checked;
            }
    })},
    }
});

export default toDoItemsSlice.reducer;

export const { addItem, deleteItem, markAsChecked } = toDoItemsSlice.actions;