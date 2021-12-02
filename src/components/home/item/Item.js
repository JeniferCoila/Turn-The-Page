import './Item.scss';
import ItemCount from '../item-count/ItemCount';
import {subject} from '../../../services/serviceItem';

const img_path = '/assets/img/books/';

const dataInital = {
    initial:1,
    stock: 3
  }
  
const Item = (props) => {
    const {imageLink, price, title, author} = props.data;
    const onAdd = () => {
      subject.next({
        item: 1,
        qty: 1,
        addedToCart: false,
        ...props.data
      });
    }
    return (
    <div className="vlp-product-item card"> 
        <img className="card-img-top" src={img_path + imageLink} alt= {title}/>
        <div className="card-body">
            <p className="vlp-product-item-title card-title">{title}</p>
            <p className="vlp-product-item-author">{author}</p>
            <span className="vlp-product-item-price">S/{price}</span>
            <ItemCount initial={dataInital.initial} stock= {dataInital.stock}></ItemCount>
            <button onClick={onAdd} className="btn btn-secondary">Agregar al carrito</button>
        </div>
      
    </div>
  );
}

export default Item;