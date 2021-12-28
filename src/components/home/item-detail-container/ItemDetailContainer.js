import "./ItemDetailContainer.scss";
import ItemDetail from "../item-detail/ItemDetail";
import React, { useState, useEffect } from "react";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useParams } from "react-router-dom";
import SpinnerComponent from "../../../components/spinner/Spinner";

const ItemDetailContainer = () => {
  const paramId  = useParams().id;

  const [isLoadingBook, setIsLoadingBook] = useState(true);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    getDocs(query(collection(db, "books"), where('slug', '==', paramId)))
      .then((querySnapshot) => {
        const res = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setBookData(res[0]);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setIsLoadingBook(false);
      });
    return () => {
      setBookData({});
    };
  }, [paramId]);

  return (
    <div className="vlp-product-detail">
      {isLoadingBook ? <SpinnerComponent /> : <ItemDetail product={bookData} />}
    </div>
  );
};

export default ItemDetailContainer;
