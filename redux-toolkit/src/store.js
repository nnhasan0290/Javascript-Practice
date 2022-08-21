import {configureStore} from "@reduxjs/toolkit";
import testReducer from "./reducer.js";

export const store = configureStore({
    reducer:{
        testState: testReducer
    }
})