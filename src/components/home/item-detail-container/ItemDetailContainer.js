import "./ItemDetailContainer.scss";
import ItemDetail from "../item-detail/ItemDetail";
import React, { useState, useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useParams } from 'react-router-dom';
import SpinnerComponent from "../../../components/spinner/Spinner";


const ItemDetailContainer = () => {
  
  const {id} = useParams();

    const [isLoadingBook, setIsLoadingBook] = useState(true);
    const [bookData, setBookData] = useState(null);

    // useEffect(() => {
    //     getItem(id).then((res) => {
    //       setBookData(res);
    //       setIsLoadingBook(false);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // }, [id]);


    
  useEffect(() => {
    getDocs(query(collection(db, "books"), where("slug", "==", id)))
      .then((querySnapshot) => {
        console.log(querySnapshot);
        if (querySnapshot) {
          const res = querySnapshot;
          setBookData(res);
          setIsLoadingBook(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setBookData({});
    };
  }, [id]);
  
    return (
      <div className="vlp-product-detail">
        {isLoadingBook ? <SpinnerComponent/> : <ItemDetail product = {bookData}/>}
      </div>
    );
  };

export default ItemDetailContainer;
