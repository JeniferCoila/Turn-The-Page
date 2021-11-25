import './ItemListContainer.scss';

const ItemListContainer = (props) => {
  return (
    <div className="vlp-product-list">
      <h2>{props.greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
