import "./ItemDetail.scss";
import ItemCount from "../item-count/ItemCount";
// import {subject} from '../../../services/serviceItem';
const img_path = "/assets/img/books/";

const dataInital = {
  initial: 1,
  stock: 3,
};

const ItemDetail = ({product}) => {
  // const onAdd = () => {
  //   subject.next({
  //     item: 1,
  //     qty: 1,
  //     addedToCart: false,
  //     ...props.data
  //   });
  // }

  return (
    <div className="vlp-product-detail">
      <h2>Detalles</h2>
      <div className="vlp-product-detail-container">
        <div className="vlp-product-detail-img">
          <img src={img_path + product.imageLink} alt={product.title} />
        </div>
        <div className="vlp-product-detail-main">
          <h3 className="vlp-product-detail-title">{product.title}</h3>
          <p className="vlp-product-detail-author">{product.author}</p>
          <p className="vlp-product-detail-year">Año: {product.year}</p>
          <p className="vlp-product-detail-pages">Páginas: {product.pages}</p>
          <p className="vlp-product-detail-country">País: {product.country}</p>
          <a href={product.link} target="_blank" rel="noopener noreferrer">
            Wiki
          </a>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim dui, interdum id magna vehicula, volutpat sollicitudin nisl. Quisque sit amet suscipit libero. Mauris tincidunt leo eget rutrum suscipit. Quisque vehicula suscipit ipsum, vitae aliquet lorem posuere in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales tincidunt placerat. Nullam pharetra facilisis bibendum. Sed varius volutpat dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur commodo rhoncus orci aliquam egestas.</p>
          </div>
        </div>
        <div className="vlp-product-detail-count">
          <div>
            <p className="vlp-product-detail-price">Precio</p>
            <span className="vlp-product-detail-price">S/{product.price}</span>
          </div>
          <ItemCount
            initial={dataInital.initial}
            stock={dataInital.stock}
          ></ItemCount>
          <button className="btn btn-primary">Comprar ahora</button>
          <button className="btn btn-secondary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
