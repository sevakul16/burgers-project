import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import { CartContext } from "../store/CartContext";
import UserProgressContext from "../store/UserPrograssContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);

  const cartItemsCount = cartCtx.items.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  function handleShowCart() {
    progressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Reactfood</h1>
      </div>
      <nav>
        <button onClick={handleShowCart}>Cart ({cartItemsCount})</button>
      </nav>
    </header>
  );
};

export default Header;
