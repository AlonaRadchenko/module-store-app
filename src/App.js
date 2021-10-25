import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import './App.scss';
import { storeConnector } from './store';
import React, { useEffect, useState } from 'react';

function App(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function callGetProducts() {
      await props.actions.products.getProducts();
      setLoading(false)
    }
    callGetProducts();
  }, []);
  return (
    <div className="App">
      <div>
        <ProductsList/>
      </div>
      <div className='vertical-line'/>
      <div className='cart-container'>
        <Cart/>
      </div>
      {
        loading &&
        <div className={`spinner-container absolute full-page`}>
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
      }
    </div>
  );
}

export default storeConnector(App, { });
