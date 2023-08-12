import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : true,
}

export const RentSlice = createSlice({
    name: 'RentSlice',
    initialState,
    setRental : (state) => {
        return state.value;
    }
})

export const {setRental} = RentSlice.actions;

export default RentSlice.reducer;