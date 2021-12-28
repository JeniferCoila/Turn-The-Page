import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const img_path = "/assets/img/books/";

const CartContainer = ({ product }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      <div>
        {cartItems.addedItems.map((item) => (
          <div key={item.id}>
            <div className="vlp-product-detail-img">
              <img src={img_path + item.prod.imageLink} alt={item.prod.title} />
            </div>
            <div>
              <h3>{item.prod.title}</h3>
              <p>
                <span>Cantidad:</span>
                <span>{item.qty} unidades</span>
              </p>
            </div>
            <div>
              <p>
                <span>Precio unitario:</span>
                <span>{item.prod.price}</span>
              </p>
            </div>
            <div>
              <p>
                <span>Precio subtotal:</span>
                <span>{item.prod.price*item.qty}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartContainer;
