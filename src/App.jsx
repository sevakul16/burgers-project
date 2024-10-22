import Cart from "./components/Cart";
import Chackout from "./components/Chackout";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressProvider } from "./store/UserPrograssContext";

//start 280

function App() {
  return (
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <Menu />
        <Cart />
        <Chackout />
      </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
