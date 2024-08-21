import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import cartState from "@/lib/states/cartState";
import CartProduct from "@/types/CartProduct.type";

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart(state, action: PayloadAction<CartProduct>) {
      const productIdx = state.products.findIndex(
        (product) => product.id === action.payload.id,
      );

      const product: CartProduct = { ...action.payload };

      if (productIdx > -1) {
        state.products[productIdx].count += 1;
      } else {
        state.products.push(product);
      }
    },
    decreaseProduct(state, action: PayloadAction<number>) {
      const productIdx = state.products.findIndex(
        (product) => product.id === action.payload,
      );

      const product: CartProduct = state.products[productIdx];

      if (product.count > 1) {
        state.products[productIdx].count -= 1;
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      const productIdx = state.products.findIndex(
        (product) => product.id === action.payload,
      );

      const product: CartProduct = state.products[productIdx];

      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
      };
    },
    checkout(state) {
      state.products = [];
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

export const decreaseProduct = (product: CartProduct) => {
  return (dispatch: Dispatch) => {
    dispatch(cartActions.decreaseProduct(product.id));
  };
};

export const removeProduct = (product: CartProduct) => {
  return (dispatch: Dispatch) => {
    dispatch(cartActions.removeProduct(product.id));
  };
};

export const checkout = () => {
  return (dispatch: Dispatch) => {
    dispatch(cartActions.checkout());
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
