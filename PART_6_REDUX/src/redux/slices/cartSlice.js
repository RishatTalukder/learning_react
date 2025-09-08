import { createSlice } from "@reduxjs/toolkit"
import { cartData } from "../../data/cartData";

const initialState = {
    items: cartData,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.items = []
        },
    }
})

console.log(cartSlice);

export const { clearCart } = cartSlice.actions

export default cartSlice.reducer
