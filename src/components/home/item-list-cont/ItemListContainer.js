import './ItemListContainer.scss';
import ItemCount from '../item-count/ItemCount';

const dataInital = {
  initial:1,
  stock:10
}

const ItemListContainer = (props) => {

  return (
    <div className="vlp-product-list">
      <h2>{props.greeting}</h2>
      <div className="vlp-product-item">
        <div>
            <h3 className="vlp-product-item-title">Titulo</h3>
            <span className="vlp-product-item-price">S/ 50</span>
        </div>
          <ItemCount initial={dataInital.initial} stock= {dataInital.stock}></ItemCount>
      </div>
    </div>
  );
}

export default ItemListContainer;
