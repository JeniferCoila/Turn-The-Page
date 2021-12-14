import "./NavItem.scss";
import React from "react";
import { Link } from 'react-router-dom'
import CartWidget from "../cart-widget/CartWidget";

const NavItem = (props) => {
  const {label, id, classItem, iconClass, slug} = props.data;

  return (
    <li className={`vlp-navbar-list-item ${classItem}`}>
        <Link to={slug}>
          <i className={iconClass}></i>
          {id === 'icon-4' ? <CartWidget/> : <span>{label}</span>}
        </Link>
    </li>
  );
};

export default NavItem;
