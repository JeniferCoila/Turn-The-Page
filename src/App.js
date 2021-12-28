import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/home/item-list-cont/ItemListContainer";
import ItemDetailContainer from "./components/home/item-detail-container/ItemDetailContainer";
import ItemCategoryContainer from "./components/home/item-category-container/ItemCategoryContainer";
import CartContainer from "./components/cart/Cart";


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="vlp-body">
          <h1 style={{ display: "none" }}>Hello World</h1>
          <header className="vlp-header">
            <NavBar />
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Descubre tus libros favoritos"></ItemListContainer>
              }
            ></Route>
            <Route
              path="/category/:id"
              element={<ItemCategoryContainer />}
            ></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<CartContainer />}></Route>

          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
