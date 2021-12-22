import './Item.scss';
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import ModalCartConfirmComponent from "../../../components/modal/cart-confirm/ModalCartConfirm";
import ItemCount from '../item-count/ItemCount';

const img_path = '/assets/img/books/';

const dataInital = {
    initial:1,
    stock: 3
}


const Item = (props) => {
    const {imageLink, price, title, author, slug} = props.data;
  
    const [goToCart, setGoToCart] = useState(false);
  
    const addTocart = (confirm) => {
      setGoToCart(confirm);
    }
      
    return (
      <div className="vlp-product-item card"> 
          <Link to={"/item/"+ slug} className="vlp-product-item-link">
            <img className="card-img-top" src={img_path + imageLink} alt= {title}/>
            <div className="card-body">
                <p className="vlp-product-item-title card-title">{title}</p>
                <p className="vlp-product-item-author">{author}</p>
                <span className="vlp-product-item-price">S/{price}</span>
            </div>
          </Link>
          {!goToCart ? 
          <ItemCount onConfirm={addTocart} initial={dataInital.initial} stock= {dataInital.stock} data={props.data}
          ></ItemCount> :
          <ModalCartConfirmComponent onConfirm={addTocart}/>}
      </div>
    
  );
}

export default Item;