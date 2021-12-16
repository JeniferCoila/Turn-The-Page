import './Item.scss';
import ItemCount from '../item-count/ItemCount';
import { Link } from 'react-router-dom'

const img_path = '/assets/img/books/';

const dataInital = {
    initial:1,
    stock: 3
}
  
const Item = (props) => {
    const {imageLink, price, title, author, slug} = props.data;

    return (
      <div className="vlp-product-item card"> 
          <Link to={"/item/"+ slug} className="vlp-product-item-link">
            <img className="card-img-top" src={img_path + imageLink} alt= {title}/>
            <div className="card-body">
                <p className="vlp-product-item-title card-title">{title}</p>
                <p className="vlp-product-item-author">{author}</p>
                <span className="vlp-product-item-price">S/{price}</span>
            </div>
          </Link>
          <ItemCount initial={dataInital.initial} stock= {dataInital.stock} data={props.data}></ItemCount>
      </div>
    
  );
}

export default Item;