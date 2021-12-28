import "./NavBar.scss";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";
import NavItemDropdown from "./nav-item-dropdown/NavItemDropdown";
import NavItem from "./nav-item/NavItem";

const NavBar = () => {
  const [navBarItems, setNavBarItems] = useState([]);
  useEffect(() => {
    getDocs(collection(db, "navbar"))
      .then((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          const navBarItems = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setNavBarItems(navBarItems);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setNavBarItems([]);
    };
  }, []);
  return (
    <nav className="vlp-navbar">
      <div className="vlp-navbar-logo">
        <Link to="/">
          <picture>
            <img src="/assets/img/logonew.png" alt="logo" />
          </picture>
        </Link>
      </div>

      <div className="vlp-navbar-list">
        <ul className="nav nav-pills">
          {navBarItems.map((item) => {
            return item.children.length > 0 ? (
              <NavItemDropdown data={item} key={item.id}></NavItemDropdown>
            ) : (
              <NavItem data={item} key={item.id}></NavItem>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
