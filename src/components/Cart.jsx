import React, { useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import UserProgressContext from "../store/UserPrograssContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    progressCtx.hideCart();
  }

  function handleCheckout() {
    progressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={progressCtx.progress === "cart"}
      onClose={progressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <button className="button" onClick={handleCloseCart}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button className="button" onClick={handleCheckout}>
            Go to Checkout
          </button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
