import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: "testing",
    initialState: {value: 0},
    reducers: {
        increment: (state) => {
            state.value++
        },

       incrementSend: (state,action) => {
           state.value = action.payload;
       }
    }
})
export const increment = testSlice.actions.increment;

export default testSlice.reducer;