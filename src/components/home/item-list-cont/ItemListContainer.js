import './ItemListContainer.scss';
import ItemList from '../item-list/ItemList';


const ItemListContainer = (props) => {

  return (
    <div className="vlp-product-main">
      <h2>{props.greeting}</h2>
      <ItemList/>
    </div>
  );
}

export default ItemListContainer;
