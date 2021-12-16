import "./ItemCount.scss";
import React, { useState } from "react";
import { subject } from "../../../services/serviceItem";

const ItemCount = (props) => {
  const [count, setCounter] = useState(props.initial);

  const stock = props.stock;

  const onAdd = () => {
    const cartData = sessionStorage.getItem("cart");
    if (cartData) {
      const cartDataItems = JSON.parse(cartData).data;
      let idxItem = -1;
      cartDataItems.forEach((item, i) => {
        if (item.id === props.data.slug) {
            idxItem = i;
        }
    });

      if (idxItem < 0) {
        addItem(cartDataItems);
      } else {
        updateItem(cartData, idxItem);
      }
    } else {
      addItem([]);
    }
  };

  const addItem = (cartData) => {
    const newItem = {
      id: props.data.slug,
      qty: count,
      prod: props.data,
      addedToCart: true,
    };
    const newCart = { data: [...cartData, newItem] };
    sessionStorage.setItem("cart", JSON.stringify(newCart));
    subject.next(newCart);
  };

  const updateItem = (cartItems, idxItem) => {

    const newCart = JSON.parse(cartItems).data;
    newCart[idxItem] = {
      id: props.data.slug,
      qty: count,
      prod: props.data,
      addedToCart: true,
    };
    console.log(newCart)
    sessionStorage.setItem("cart", JSON.stringify({ data: newCart }));
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
