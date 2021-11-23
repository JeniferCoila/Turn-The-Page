import './NavBar.scss';
import logo from './../assets/img/logonew.png';


const NavBar = () => {
    return (
        <nav className="vlp-navbar">
            <div className="vlp-navbar-logo" >
                <a href="/#">
                </a>
                <picture>
                    <img src={logo} alt="logo" />
                </picture>
            </div>

            <div className="vlp-navbar-list">
                <ul>
                    <li className="vlp-navbar-list-item">
                        <a href="/#">Mi cuenta</a>
                    </li>
                    <li className="vlp-navbar-list-item">
                        <a href="/#">Lista de deseos</a>
                    </li>
                    <li className="vlp-navbar-list-item">
                        <a href="/#">Carrito de compras</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;