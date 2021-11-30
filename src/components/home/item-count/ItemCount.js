import "./ItemCount.scss";
import React, { useState } from "react";

const ItemCount = (props) => {
    const [count, setCounter] = useState(props.initial);
    
    const stock = props.stock;

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
        <div className="vlp-product-item">
            <button onClick={increment}>+</button>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
        </div>
    );
};


export default ItemCount;
