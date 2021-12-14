import "./ItemListContainer.scss";
import ItemList from "../item-list/ItemList";
import books from "../../../data/books.json";
import React, { useState, useEffect } from "react";
import SpinnerComponent from "../../../components/spinner/Spinner";

const ItemListContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [booksList, setBooksList] = useState([]);
  
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(books);
        } catch (e) {
          reject(e);
        }
      }, 2000);
    })
      .then((res) => {
        setBooksList(res.slice(0, 24));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "sss");
        console.error(err);
      });
  }, []);

  return (
    <div className="vlp-product-main">
      <h2>{props.greeting}</h2>
      {isLoading ? <SpinnerComponent/> : <ItemList data = {booksList}/>}
    </div>
  );
};

export default ItemListContainer;
