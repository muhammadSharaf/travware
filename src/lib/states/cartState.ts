import CartProduct from "@/types/CartProduct.type";

interface State {
  items: CartProduct[];
}

const cartState: State = {
  items: [],
};

export default cartState;
