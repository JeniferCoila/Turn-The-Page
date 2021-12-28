import "./ItemListContainer.scss";
import ItemList from "../item-list/ItemList";
import React, { useState, useEffect } from "react";
import SpinnerComponent from "../../../components/spinner/Spinner";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";

const ItemListContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "books"))
      .then((querySnapshot) => {
        if (querySnapshot.docs.length > 0) {
          const res = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setBooksList(res.slice(0, 24));
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setBooksList([]);
    };
  }, []);

  return (
    <div className="vlp-product-main">
      <h2>{props.greeting}</h2>
      {isLoading ? <SpinnerComponent /> : <ItemList data={booksList} />}
    </div>
  );
};

export default ItemListContainer;
