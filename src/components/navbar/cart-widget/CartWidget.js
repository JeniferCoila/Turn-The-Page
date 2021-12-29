import "./CartWidget.scss";
import React, { useContext, useMemo } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  const qty = useMemo(() => cartItems.totalQty, [cartItems.totalQty]);

  return <span>{qty}</span>;
};

export default CartWidget;
