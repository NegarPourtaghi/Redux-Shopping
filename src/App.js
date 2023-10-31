import React from 'react';
import ShopingStore from './Components/ShopingStore'
import { Provider } from 'react-redux';
import Store from '../src/Redux/Store';
import { Navigate,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import ShopingCart from './Components/ShopingCart';


const App = () => {
  return (
    <Provider store={Store}>
      <Navbar />
            <Routes>
              <Route path="/Store" element={<ShopingStore/>}/>
              <Route path="/Store/ProductDetails/:id" element={<ProductDetails/>} />
              <Route path="/*" element={<Navigate to="/Store" />} />
              <Route path="/ShopingCart" element={<ShopingCart />} />

            </Routes>
    </Provider>
  );
};

export default App;