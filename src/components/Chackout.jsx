import React, { useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Input from "./Input";
import UserProgressContext from "../store/UserPrograssContext";

const Chackout = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleCloseCheckout() {
    userCtx.hideCheckout();
  }

  function handleSubmitOrder(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const order = Object.fromEntries(formData.entries());
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: order,
        },
      }),
    });
    cartCtx.clearCart();
    userCtx.hideCheckout();
  }

  return (
    <Modal open={userCtx.progress === "checkout"} onClose={handleCloseCheckout}>
      <form onSubmit={handleSubmitOrder}>
        <h2>Checkout</h2>
        <p>Total amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <button type="button" onClick={handleCloseCheckout}>
            Close
          </button>
          <button type="submit">Submit Order</button>
        </p>
      </form>
    </Modal>
  );
};

export default Chackout;
