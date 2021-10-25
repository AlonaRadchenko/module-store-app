import React from 'react';
import { storeConnector } from '../store';

import styles from './Product.module.css';

const Product = (props) => {

  function addItem(id) {
    props.actions.products.addItemToCart(id);
  }

  return (
    <div className={styles.productItem}>
      <img alt='' src={props.item.imgURL}></img>
      <div className={styles.name}>{props.item.name}</div>
      <div>
        <span>price: </span>
        <span className={styles.price}>{props.item.price}$</span>
      </div>
      <button onClick={() => addItem(props.item.id)}>Add to cart</button>

    </div>
  );
}

export default storeConnector(Product, {  });