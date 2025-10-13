import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(item => item.productId === action.payload.productId);
      if (existing) existing.quantity += action.payload.quantity;
      else state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.productId !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(i => i.productId === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { setCart, addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
