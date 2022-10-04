import React from 'react';
import { Route, Routes } from 'react-router-dom'

//Components
import Header from './Components/header/Header';
import Home from './Components/home/Home'
import Store from './Components/ViewProducts/Store';
import Details from './Components/details/Details';
import Cart from './Components/cart/Cart';
import Footer from './Components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/all' element={<Store  />} />
        <Route path='/smartphones' element={<Store apiURL="https://dummyjson.com/products/category/smartphones" />} />
        <Route path='/automotive' element={<Store apiURL="https://dummyjson.com/products/category/automotive" />} />
        <Route path='/tops' element={<Store apiURL="https://dummyjson.com/products/category/tops" />} />
        <Route path='/decoration' element={<Store apiURL="https://dummyjson.com/products/category/home-decoration" />} />
        <Route path='/fragrances' element={<Store apiURL="https://dummyjson.com/products/category/fragrances" />} />
        <Route path='/furniture' element={<Store apiURL="https://dummyjson.com/products/category/furniture" />} />
        <Route path='/womensshoes' element={<Store apiURL="https://dummyjson.com/products/category/womens-shoes" />} />
        <Route path='/jewellery' element={<Store apiURL="https://dummyjson.com/products/category/womens-jewellery" />} />
        <Route path='/laptops' element={<Store apiURL="https://dummyjson.com/products/category/laptops" />} />
        <Route path='/motorcycle' element={<Store apiURL="https://dummyjson.com/products/category/motorcycle" />} />
        <Route path='/skincare' element={<Store apiURL="https://dummyjson.com/products/category/skincare" />} />
        <Route path='/shoes' element={<Store apiURL="https://dummyjson.com/products/category/mens-shoes" />} />
        <Route path='/groceries' element={<Store apiURL="https://dummyjson.com/products/category/groceries" />} />
        <Route path='/sunglasses' element={<Store apiURL="https://dummyjson.com/products/category/sunglasses" />} />
        <Route path='/lighting' element={<Store apiURL="https://dummyjson.com/products/category/lighting" />} />
        <Route path='/watches' element={<Store apiURL="https://dummyjson.com/products/category/mens-watches" />} />
        <Route path='/bags' element={<Store apiURL="https://dummyjson.com/products/category/womens-bags" />} />
        <Route path='/dresses' element={<Store apiURL="https://dummyjson.com/products/category/womens-dresses" />} />
        <Route path='/womenswatches' element={<Store apiURL="https://dummyjson.com/products/category/womens-watches" />} />
        <Route path='/shirts' element={<Store apiURL="https://dummyjson.com/products/category/mens-shirts" />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;