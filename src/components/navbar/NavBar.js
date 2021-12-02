import "./NavBar.scss";
import CartWidget from "./cart-widget/CartWidget";


const navBarItems = [
  {
    id: 1,
    name: "Lista de deseos",
    label: "Lista de deseos",
    classItem: "vlp-navbar-list-item-wishlist",
    iconClass: "fa fa-heart"
  },
  {
    name: "Mi cuenta",
    label: "Mi cuenta",
    id: 2,
    classItem: "vlp-navbar-list-item-myaccount",
    iconClass: "fa fa-user"
  },
  {
    name: "Carrito",
    label: 0,
    id: 3,
    classItem: "vlp-navbar-list-item-cart",
    iconClass: "fa fa-shopping-cart"
  },
];

const NavBar = () => {
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
