import "./NavBar.scss";
import CartWidget from "./cart-widget/CartWidget";
// import {subject} from "../../services/serviceItem";
// import React, { useState, useEffect } from "react";

const navBarItems = [
  {
    id: 1,
    name: "Lista de deseos",
    label: "Lista de deseos",
    class: "vlp-navbar-list-item-wishlist",
    iconClass: "fa fa-heart"
  },
  {
    name: "Mi cuenta",
    label: "Mi cuenta",
    id: 2,
    class: "vlp-navbar-list-item-myaccount",
    iconClass: "fa fa-user"
  },
  {
    name: "Carrito",
    label: 0,
    id: 3,
    class: "vlp-navbar-list-item-cart",
    iconClass: "fa fa-shopping-cart"
  },
];

const NavBar = () => {
    // const [labelCart, setMessages] = useState(navBarItems[2].label);
    // useEffect(() => {
    //   const subscription = subject.subscribe(res => {
    //     console.log(navBarItems[2].label, 'aaaa')
    //     setMessages(labelCart + 1);
    //     navBarItems[2].label += 1;
    //   });
    //   return subscription.unsubscribe;
    // }, []);
    
    return (
      <nav className="vlp-navbar">
        <div className="vlp-navbar-logo">
          <a href="/#">
            <picture>
              <img src='/assets/img/logonew.png' alt="logo" />
            </picture>
          </a>
        </div>

        <div className="vlp-navbar-list">
          <ul>
            {navBarItems.map((item) => {
              return (
                <CartWidget data = {item} ></CartWidget>
                );
            })}
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;
