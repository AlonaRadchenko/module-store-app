import React from 'react';
import { storeConnector } from '../store';
import Product from './Product';

import styles from './ProductsList.module.css';

const ProductsList = (props) => {
  return (
    <>
      <div className='title'>
        Products List
      </div>
      <div className={styles.wrapedContent}>
        {
          props.productsArr.map((p,i) =>
            <Product key={i} item={p}/>
          )
        }
      </div>
    </>
  );
}

export default storeConnector(ProductsList, { products: ['productsArr'] });