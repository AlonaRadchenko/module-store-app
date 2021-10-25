import React from 'react';
import { storeConnector } from '../store';

import styles from './Cart.module.css';

const Cart = (props) => {
  function generateProductsList() {
    return props.productsIds.map(id => props.productsArr.find(p => p.id === id));
  }
  return (
    <>
      <div className='title'>
        Cart <span>{props.productsIds.length}</span>
      </div>
      <div>
      {
        props.productsIds.length ?
        <table className={styles.cartTable}>
          <tbody>
            <tr>
              <td>#</td>
              <td colSpan='2'>
                Product
              </td>
              <td>
                Count
              </td>
              <td>
                Price
              </td>
              <td></td>
            </tr>
            {
              generateProductsList().map((el,i) =>
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>
                    <img alt='' src={el.imgURL}></img>
                  </td>
                  <td>{el.name}</td>
                  <td>{props.countOfEachItemById[el.id]}</td>
                  <td>{props.countOfEachItemById[el.id]*el.price}$</td>
                  <td><button onClick={()=>props.actions.cart.removeItemFromCart(el.id)}>✕</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
        : <></>
      }

      </div>
    </>
  );
}

export default storeConnector(Cart, { cart: 'all', products: 'all' });