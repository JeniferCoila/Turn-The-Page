import './ItemList.scss';
import Item from '../item/Item';


const ItemList = (props) => {
    const items  = props.data;
    console.log(items, 'items')
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
