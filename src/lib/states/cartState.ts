import CartProduct from "@/types/CartProduct.type";

interface State {
  products: CartProduct[];
}

const cartState: State = {
  products: [],
};

export default cartState;
