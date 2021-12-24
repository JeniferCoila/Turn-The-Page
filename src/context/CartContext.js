import { useState, createContext, useContext, useEffect } from "react";

export const CartContext = createContext([]);

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [],
  totalPrice: 0,
  itemQty: 0,
  totalQty: 0
};

const setSessionStorage = (cartItems) => {
  sessionStorage.setItem("cart", JSON.stringify(cartItems));
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(INITIAL_STATE);


  useEffect(() => {
    const cartDataSaved = sessionStorage.getItem("cart");

    if (!cartDataSaved) {
      setSessionStorage(INITIAL_STATE);
    } else {
      setCartItems(JSON.parse(cartDataSaved));
    }
  }, []);
  


  const addItem = (prod, qtySelected) => {
    console.log('se añade item', prod, cartItems)
    let idxItem = -1;
    const newCart = cartItems;

    const newItem = {
      id: prod.slug,
      qty: qtySelected,
      prod: prod,
      addedToCart: true,
    };

    newCart.addedItems.forEach((item, i) => {
      if (item.id === prod.slug) {
          idxItem = i;
      }
    });

    if(idxItem >= 0) {
      newCart.addedItems[idxItem].qty += qtySelected;
    } else {
      newCart.addedItems.push(newItem)
    }

    newCart.totalPrice = newCart.addedItems.reduce((acc, item) => {
      return acc + item.prod.price * item.qty;
    }, 0);

    newCart.itemQty = newCart.addedItems.length;

    newCart.totalQty = newCart.addedItems.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);

    setCartItems(newCart);
    setSessionStorage(newCart);

  };

  const clear = () => {

    setCartItems(INITIAL_STATE);
    setSessionStorage(INITIAL_STATE);
  };

  const removeItem = (item) => {
    const newCart = cartItems;

    const newItems = newCart.addedItems.filter(
      (addedItem) => addedItem.id !== item.id
    );
    setCartItems({ ...newCart, addedItems: newItems });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
