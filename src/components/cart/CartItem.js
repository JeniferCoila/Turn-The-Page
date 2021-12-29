import React, { useContext } from "react";
import './CartItem.scss'
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const img_path = "/assets/img/books/";

const CartItem = (props) => {
  const { item } = props;
  const { removeItem } = useContext(CartContext);

  return (
    <tr className="vlp-cart-product">
      <td>
        <div>
          <Link to={"/item/" + item.prod.slug}>
            <div className="vlp-cart-product-container">
              <div className="vlp-cart-product-img">
                <img
                  src={img_path + item.prod.imageLink}
                  alt={item.prod.title}
                />
              </div>
              <div className="vlp-cart-product-details">
                <p>{item.prod.title}</p>
                <p> S/ {item.prod.price}</p>
                <p>{item.prod.author}</p>
              </div>
            </div>
          </Link>
        </div>
      </td>
      <td>{item.qty}</td>
      <td>S/ {item.qty * item.prod.price}</td>
      <td>
        <button onClick={() => removeItem(item)} className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
