import "./CartWidget.scss";
import {subject} from "../../../services/serviceItem";
import React, { useState, useEffect } from "react";

const CartWidget = () => {
  const [labelCart, setMessages] = useState(0);
  useEffect(() => {
    const subscription = subject.subscribe(res => {
      console.log(res.addedToCart)
      setMessages(labelCart + 1);

      // if(!res.addedToCart) { 
      //   setMessages(labelCart + 1);
      //   // const newResponse = res;
      //   // newResponse.addedToCart = true;
      //   // subject.next(newResponse);
      // } else {
      //   setMessages(labelCart); 
      // }
    });
    return() => subscription.unsubscribe;
  });

  return (
    <span>
          {labelCart}
    </span>
  );
};

export default CartWidget;
