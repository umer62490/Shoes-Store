import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.cartItems.push({...action.payload, quantity: 1});
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price || 0;
        },
        removeFromCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(existingItem){
                if(existingItem.quantity > 1){
                    existingItem.quantity -= 1;
                }else{
                    state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
                }
            }
            state.totalQuantity -= 1;
            state.totalPrice -= action.payload.price;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
        calculateTotals: (state) => {   
            state.totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
            state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
        decrementQuantity: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity -= 1;
            }
            state.totalQuantity -= 1;
            state.totalPrice -= action.payload.price;
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
          }
    },
});

export const { addToCart, removeFromCart, clearCart, calculateTotals, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;