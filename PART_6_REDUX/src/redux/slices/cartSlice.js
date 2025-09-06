import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

console.log(cartSlice);


export default cartSlice.reducer
