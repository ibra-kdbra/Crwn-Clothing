import React from 'react';
import './App.css';
import {Routes ,  Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import Authentication from './authentication/authentication';
import Checkout from './components/checkout/checkout.component';

const App =()=>{
    return (
    <div>
      <Routes>
      <Route path = "/" element= {<Header/>}>
        <Route index element= {<HomePage/>}/>
        <Route path = "shop/*" element ={<ShopPage/>}/>
        <Route exact path = "auth" element ={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>} />
      </Route>
      </Routes>
    </div>
  );
  }
export default App;




