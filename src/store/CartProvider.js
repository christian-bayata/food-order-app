import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCart = (item = {});

  const removeItemToCart = (id = {});

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItems: removeItemToCart,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
