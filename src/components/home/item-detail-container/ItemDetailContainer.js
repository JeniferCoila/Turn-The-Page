import "./ItemDetailContainer.scss";
import ItemDetail from "../item-detail/ItemDetail";
import books from "../../../data/books.json";
import React, { useState, useEffect } from "react";
 

const getItem = () => {
 return new Promise((resolve, reject)  => {
    setTimeout(() => {
      try {
        resolve(books[15]);
      } catch (e) {
        reject(e);
      }
    }, 2000);
  })
}

const ItemDetailContainer = () => {
    const [isLoadingBook, setIsLoadingBook] = useState(true);
    const [bookData, setBookData] = useState(null);
    
    useEffect(() => {
        getItem().then((res) => {
          setBookData(res);
          setIsLoadingBook(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
  
    return (
      <div className="vlp-product-detail">
        {isLoadingBook ? <div>Cargando...</div> : <ItemDetail product = {bookData}/>}
      </div>
    );
  };

export default ItemDetailContainer;
