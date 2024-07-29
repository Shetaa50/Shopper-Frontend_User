import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';
  import { useTranslation } from 'react-i18next';
import './i18n/i18n'; 
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log('lng', lng);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div>
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Shopper-Frontend_User' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer changeLanguage={changeLanguage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
