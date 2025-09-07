import { createSlice } from "@reduxjs/toolkit"
import { cartData } from "../../data/cartData";

const initialState = {
    items: cartData,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

console.log(cartSlice);


export default cartSlice.reducer
