import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        itemsAdded: (state, action) => {
            const addedItem = state.items.find((x) => x.id === action.payload.id);

            if (addedItem) {
                addedItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        itemDeleted: (state, action) => {
            state.items = state.items.filter((x) => x.id !== action.payload);
        },
        quantityUpdated: (state, action) => {
            const { id, quantityChange } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity += quantityChange;
                if (item.quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== id);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
});

export default cartSlice.reducer;
export const { itemsAdded, itemDeleted, quantityUpdated, clearCart } = cartSlice.actions;
