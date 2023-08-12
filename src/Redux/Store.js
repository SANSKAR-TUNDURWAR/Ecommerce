import { configureStore } from "@reduxjs/toolkit";

import RentSlice from "./Slices/RentSlice";

export const Store = configureStore({
    reducer : {
        RentSlice : RentSlice,
    }
})