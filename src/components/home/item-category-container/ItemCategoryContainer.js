import "./ItemCategoryContainer.scss";
import ItemList from "../item-list/ItemList";
import SpinnerComponent from "../../../components/spinner/Spinner";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../../services/firebase";
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const getTitle = (pathName) => {
    switch (pathName) {
        case 'es':
            return {
                'title': 'Libros en Español',
                'qryParam': 'Spanish'
            }
        case 'en':
            return {
                'title': 'Libros en Inglés',
                'qryParam': 'English'
            }
        case 'fr':
            return {
                'title': 'Libros en Francés',
                'qryParam': 'French'
            }
        case 'de':
            return {
                'title': 'Libros en Alemán',
                'qryParam': 'German'
            }
        case 'it':
            return {
                'title': 'Libros en Italiano',
                'qryParam': 'Italian'
            }
        case 'pt':  
        return {
            'title': 'Libros en Portugués',
            'qryParam': 'Portuguese'
        }
        default:
            return {
                'title': 'Libros Internacionales',
                'qryParam': 'International'
            }
    }
}

const ItemCategoryContainer = () => {

    const location = useLocation();
    const pathName = location.pathname.split('/')[2];
    const { title, qryParam } = getTitle(pathName);

    const [isLoading, setIsLoading] = useState(true);
    const [booksList, setBooksList] = useState([]);

    useEffect(() => {
        getDocs(query(collection(db, "books"), where('language', '==', qryParam)))
          .then((querySnapshot) => {
            const res = querySnapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            });
            setBooksList(res);
          }).catch((error) => {
            console.log(error);
          }).finally(() => {
            setIsLoading(false);
          });
        return () => {
          setBooksList([]);
        };
      }, [qryParam]);

    return (
        <div className="vlp-product-main">
            
            {isLoading ? <SpinnerComponent/> : (
                <div>
                    <h2>{title}</h2>
                    <ItemList data={booksList} />
                </div>
            )}
        </div>
    );
};

export default ItemCategoryContainer;