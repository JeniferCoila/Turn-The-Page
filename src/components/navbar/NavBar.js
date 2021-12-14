import "./NavBar.scss";
import { Link } from 'react-router-dom'
import NavItemDropdown from "./nav-item-dropdown/NavItemDropdown";
import NavItem from "./nav-item/NavItem";

const navBarItems = [
  {
    id: 'icon-1',
    name: "Categorías",
    label: "Categorias",
    classItem: "vlp-navbar-list-item-categories nav-item dropdown",
    iconClass: "fa fa-book",
    slug: "category",
    children: [
      {
        id: 'cat01',
        name: "Libros en Inglés",
        label: "Libros en Inglés",
        classItem: "vlp-navbar-list-item-categories-eng",
        iconClass: "fa fa-heart",
        slug: "en"
      },
      {
        id: 'cat02',
        name: "Libros en Español",
        label: "Libros en Español",
        classItem: "vlp-navbar-list-item-categories-esp",
        iconClass: "fa fa-heart",
        slug: "es"
      },
      {
        id: 'cat03',
        name: "Libros en Portugués",
        label: "Libros en Portugués",
        classItem: "vlp-navbar-list-item-categories-pt",
        iconClass: "fa fa-heart",
        slug: "pt"
      }
    ]
  },
  {
    id: 'icon-2',
    name: "Lista de deseos",
    label: "Lista de deseos",
    classItem: "vlp-navbar-list-item-wishlist",
    iconClass: "fa fa-heart",
    slug: "wishlist"
  },
  {
    name: "Mi cuenta",
    label: "Mi cuenta",
    id: 'icon-3',
    classItem: "vlp-navbar-list-item-myaccount",
    iconClass: "fa fa-user",
    slug: "myaccount"
  },
  {
    name: "Carrito",
    label: 0,
    id: 'icon-4',
    classItem: "vlp-navbar-list-item-cart",
    iconClass: "fa fa-shopping-cart",
    slug: "cart"
  },
];

const NavBar = () => {
  return (
    <nav className="vlp-navbar">
      <div className="vlp-navbar-logo">
        <Link to="/">
          <picture>
            <img src='/assets/img/logonew.png' alt="logo" />
          </picture>
        </Link>
      </div>

      <div className="vlp-navbar-list">
        <ul className="nav nav-pills">
          {navBarItems.map((item) => {
            return (item.children) ? (<NavItemDropdown data={item} key={item.id}></NavItemDropdown>) : (<NavItem data={item} key={item.id}></NavItem>)
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
