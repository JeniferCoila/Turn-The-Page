import "./CartWidget.scss";
import {subject} from "../../../services/serviceItem";
import React, { useState, useEffect } from "react";

const CartWidget = () => {
  const checkUserInitialCartData = () => {
    const cartData = sessionStorage.getItem("cart");
    if (cartData) {
      const qtyItems = JSON.parse(cartData).data.length;
      return qtyItems;
    }
    return 0;
  };

  const [labelCart, setLabelCart] = useState(checkUserInitialCartData());


  useEffect(() => {
    const subscription = subject.subscribe(res => {
      setLabelCart(labelCart + 1);

    });
    return() => subscription.unsubscribe;  
  }, [labelCart]);

  return <span>{labelCart}</span>;
};

export default CartWidget;
