import "./ItemDetailContainer.scss";
import ItemDetail from "../item-detail/ItemDetail";
import books from "../../../data/books.json";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import SpinnerComponent from "../../../components/spinner/Spinner";


const getItem = (queryParam) => {
 return new Promise((resolve, reject)  => {
    setTimeout(() => {
      try {
        const bookToShow = books.find(book => book.slug === queryParam);
        resolve(bookToShow);
      } catch (e) {
        reject(e);
      }
    }, 1000);
  })
}


const ItemDetailContainer = () => {
  
  const {id} = useParams();

    const [isLoadingBook, setIsLoadingBook] = useState(true);
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        getItem(id).then((res) => {
          setBookData(res);
          setIsLoadingBook(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }, [id]);
  
    return (
      <div className="vlp-product-detail">
        {isLoadingBook ? <SpinnerComponent/> : <ItemDetail product = {bookData}/>}
      </div>
    );
  };

export default ItemDetailContainer;
