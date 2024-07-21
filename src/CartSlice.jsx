{/*imports slice tool from the redux toolkit*/}
import { createSlice } from '@reduxjs/toolkit';

{/*
Cart slice funciton that initlizes the cart with an empty list of items

The reducers include:
addItem reducer => Checks if the item exists in the array of items if so, increments the quanity by 1, else adds (pushes) the item into the array.
removeItem reducer => finds the item and filters it out
updateQuanity reducer => basic if statement that updates the quanity of the object if it exists in the items array.
*/}

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }

        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
