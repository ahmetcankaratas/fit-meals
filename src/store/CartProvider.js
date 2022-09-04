import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addItemCartHandler = (item) => {}

    const remoteItemFromCartHandler = (id) => {};

    const cartContext = {
        items: [],
        totalAmount:0,
        addItem: addItemCartHandler,
        remoteItem: remoteItemFromCartHandler
    }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
