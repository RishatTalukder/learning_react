import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartData } from "../../data/cartData";
import axios from "axios";


export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, thunkAPI) =>{
    try{
      const url = 'http://localhost:3000/cartData'
      const res = await axios.get(url)
      return res.data
    }
    catch(error){
      return thunkAPI.rejectWithValue('Something went wrong')
    }
  }
)


const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
    calculateTotal: (state) => {
      let totalQuantity = 0;
      let totalAmount = 0;
      state.items.forEach((item) => {
        totalQuantity += item.quantity;
        totalAmount += item.price * item.quantity;
      });
      state.totalQuantity = totalQuantity;
      state.totalAmount = totalAmount;
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
  extraReducers: (builder)=>{
    builder.
    addCase(fetchCartItems.pending, (state)=>{
      state.isLoading = true
      state.error = null
    }).
    addCase(fetchCartItems.fulfilled, (state, action)=>{
      state.isLoading = false
      state.items = action.payload
    }).
    addCase(fetchCartItems.rejected, (state, action)=>{
      state.isLoading = false
      state.error = action.payload
    })
  }
});
console.log(cartSlice);

export const { clearCart, calculateTotal, increase, decrease, removeItem } = cartSlice.actions;

export default cartSlice.reducer;