import "./CartWidget.scss";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  
  const {cartItems} = useContext(CartContext);

  const [qty, setqty] = useState(cartItems.itemQty);


  useEffect(() => {
    setqty(cartItems.itemQty);
  }, [cartItems.itemQty]);
  
  return <span>{qty}</span>;
};

export default CartWidget;
