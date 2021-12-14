import './ItemList.scss';
import Item from '../item/Item';


const ItemList = (props) => {
    const items  = props.data;
    return (
        <div className="vlp-product-list">
          {items.map((book, index) => {
              return (
                <Item data = {book} key={`book-${index}`}></Item>
                );
            })}
        </div>
    );
}

export default ItemList;
