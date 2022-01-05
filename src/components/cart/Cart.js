import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const { addedItems, totalPrice, totalQty } = cartItems;
  const shippingPrice = totalPrice > 200 ? 0 : 10;

  return (
    <div>
      {addedItems.length > 0 ? (
        <div>
          <button className="btn btn-primary" onClick={clearCart}>
            <span className="badge badge-light">Vaciar carrito</span>
          </button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>{totalQty} artículos en el carrito de compras</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {addedItems.map((item) => (
                <CartItem item={item} key={item.id}>
                </CartItem>
              ))}
            </tbody>
          </Table>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th colSpan="2">Resumen de compra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>S/ {totalPrice}</td>
              </tr>
              <tr>
                <td>Envio</td>
                <td>S/ {shippingPrice}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>S/ {totalPrice + shippingPrice}</td>
              </tr>
              <tr>
                <td colSpan="2">
                <Link to="/myaccount" className="vlp-product-item-link">
                  <button className="btn btn-primary">Finalizar compra</button>
                </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : (
        <div>
          <h3>No hay artículos en el carrito de compras</h3>
          <p>Te recomendamos explorar nuestras novedades </p>
          <Link to="/" className="vlp-product-item-link">
            <button className="btn btn-primary">
              <span className="badge badge-light">Ir a la tienda</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
