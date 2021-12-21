import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [],
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE);

  const addItem = (item) => {
    // if (cart.addedItems.some((addedItem) => addedItem.name === item.name)) {
    //   // ya existe el item, hacer algo
    //   return;
    // }
    let idxItem = -1;

    cart.addedItems.forEach((addedItem, i) => {
      if (item.id === addedItem.id) {
        idxItem = i;
      }
    });

    if (idxItem < 0) {
        // addItem(cartDataItems);
      } else {
        // updateItem(cartData, idxItem);
      }

    const newAddedItems = cart.addedItems.map((product) => {
      //   if (product.name === "Bicicleta") return { ...product, quantity: 2 };

      return product;
    });
    setCart({ ...cart, addedItems: newAddedItems });
  };

  const clear = () => {
    setCart(INITIAL_STATE);
  };

  const removeItem = (item) => {
    const newItems = cart.addedItems.filter(
      (addedItem) => addedItem.id !== item.id
    );
    setCart({ ...cart, addedItems: newItems });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
