import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import cartState from "@/lib/states/cartState";
import CartProduct from "@/types/CartProduct.type";

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart(state, action: PayloadAction<CartProduct>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item: CartProduct) => item.id !== action.payload,
      );
    },
    checkout(state) {
      state.items = [];
    },
  },
});

export const addToCart = (product: CartProduct) => {
  return (dispatch: Dispatch) => {
    if (!product.count) {
      product.count = 1;
    }

    dispatch(cartActions.addToCart(product));
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
