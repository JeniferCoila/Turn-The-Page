import "./ItemCategoryContainer.scss";
import ItemList from "../item-list/ItemList";
import SpinnerComponent from "../../../components/spinner/Spinner";
import books from "../../../data/books.json";
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const getTitle = (pathName) => {
    switch (pathName) {
        case 'es':
            return {
                'title': 'Libros en Español',
                'qryParam': 'spanish'
            }
        case 'en':
            return {
                'title': 'Libros en Inglés',
                'qryParam': 'english'
            }
        case 'fr':
            return {
                'title': 'Libros en Francés',
                'qryParam': 'french'
            }
        case 'de':
            return {
                'title': 'Libros en Alemán',
                'qryParam': 'german'
            }
        case 'it':
            return {
                'title': 'Libros en Italiano',
                'qryParam': 'italian'
            }
        case 'pt':  
        return {
            'title': 'Libros en Portugués',
            'qryParam': 'portuguese'
        }
        default:
            return {
                'title': 'Libros Internacionales',
                'qryParam': 'international'
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
        setIsLoading(true);
        new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const booksList = books.filter((book) => book.language.toLowerCase() === qryParam);
                    resolve(booksList);
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
                console.error(err);
            });
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