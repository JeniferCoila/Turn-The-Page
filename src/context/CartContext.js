import { useState, createContext, useContext, useEffect } from "react";
import { LoginContext } from "./LoginContext";
import { db } from "../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

export const CartContext = createContext([]);

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [],
  totalPrice: 0,
  prodQty: 0,
  totalQty: 0,
};

const setSessionStorage = (cartItems, userData) => {
  sessionStorage.setItem("cart", JSON.stringify(cartItems));

  if (userData.isLogged) {
    updateDoc(doc(db, "users", userData.id), { cartData: cartItems })
      .then(() => {
        console.log("Cart updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(INITIAL_STATE);

  const { userData } = useContext(LoginContext);

  useEffect(() => {
    const cartDataSaved = sessionStorage.getItem("cart");
    if (!cartDataSaved) {
      setSessionStorage(INITIAL_STATE, userData);
    } else {
      setCartItems(JSON.parse(cartDataSaved));
    }
  }, [userData]);

  const addItem = (prod, qtySelected) => {
    let idxItem = -1;
    const newCart = { ...cartItems };

    const newItem = {
      id: prod.id,
      qty: qtySelected,
      prod: prod,
      addedToCart: true,
      subtotal: prod.price * qtySelected,
    };

    newCart.addedItems.forEach((item, i) => {
      if (item.id === prod.id) {
        idxItem = i;
      }
    });

    if (idxItem >= 0) {
      newCart.addedItems[idxItem].qty += qtySelected;
      newCart.addedItems[idxItem].subtotal += qtySelected * prod.price;
    } else {
      newCart.addedItems.push(newItem);
    }

    newCart.totalPrice = newCart.addedItems.reduce((acc, item) => {
      return acc + item.prod.price * item.qty;
    }, 0);

    newCart.prodQty = newCart.addedItems.length;

    newCart.totalQty = newCart.addedItems.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);

    setCartItems(newCart);
    setSessionStorage(newCart, userData);
  };

  const clearCart = () => {
    setCartItems(INITIAL_STATE);
    setSessionStorage(INITIAL_STATE, userData);
  };

  const removeItem = (item) => {
    const newItems = { ...cartItems }.addedItems.filter(
      (addedItem) => addedItem.id !== item.id
    );

    const newCart = {
      addedItems: newItems,
      totalPrice: cartItems.totalPrice - item.prod.price * item.qty,
      prodQty: newItems.length,
      totalQty: newItems.reduce((acc, item) => {
        return acc + item.qty;
      }, 0),
    };
    setCartItems(newCart);
    setSessionStorage(newCart, userData);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
