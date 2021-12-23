import "./ItemCount.scss";
import React, { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const ItemCount = (props) => {
  const [count, setCounter] = useState(props.initial);

  const {addItem} = useContext(CartContext);

  const stock = props.stock;

  const onAdd = () => {
    addItem(props.data, count);
    props.onConfirm(true)
  };

  const increment = () => {
    if (count < stock) {
      setCounter(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCounter(count - 1);
    }
  };
  return (
    <div className="vlp-product-item-addtocart">
      <div className="vlp-product-item-counter">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <h3>{count}</h3>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
      <button onClick={onAdd} className="btn btn-secondary">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
