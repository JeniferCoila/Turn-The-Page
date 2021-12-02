import './ItemList.scss';
import Item from '../item/Item';
import books from '../../../data/books.json';
import React, {useState, useEffect} from "react"

const ItemList = () => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [ booksList, setData ] = useState([]);
    useEffect( () => { 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    resolve(books);
                  } catch (e) {
                    reject(e);
                  }
            }, 2000);
            }).then( res => {
            setData(res.slice(0, 10));
            setIsLoading(false);
        }).catch( err => {
            console.error(err);
        })
    }, []);

    return (
        isLoading ? 
        <div>Cargando...</div> : 
        <div className="vlp-product-list">
          {booksList.map((book) => {
              return (
                <Item data = {book}></Item>
                );
            })}
        </div>
    );
}

export default ItemList;
