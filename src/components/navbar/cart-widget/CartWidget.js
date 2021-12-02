import "./CartWidget.scss";
import {subject} from "../../../services/serviceItem";
import React, { useState, useEffect } from "react";

const NavButton = (props) => {
  const {label, id, classItem, iconClass} = props.data;
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
    <li className="vlp-navbar-list-item">
      <a href="/#" className={classItem}>
        <i className={iconClass}></i>
          {id === 3 ? labelCart : label}
      </a>
    </li>
  );
};

export default NavButton;
