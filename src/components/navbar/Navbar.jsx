// Navbar.js
import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import Drop_down from '../assets/drop_down.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from "../../context/ShopContext";
import { useTranslation } from 'react-i18next';

const Navbar = ({ changeLanguage }) => {
  const [menu, setMenu] = useState("Shop");
  const [searchTerm, setSearchTerm] = useState("");
  const { getTotalCArtItems } = useContext(ShopContext);
  const menuref = useRef();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const DropDown_toggle = (e) => {
    menuref.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle('open');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to='/'><img src={logo} alt="" /></Link>
        <p>E-commerce</p>
      </div>
      <img className="nav-dropdown" onClick={DropDown_toggle} src={Drop_down} alt="" />
      <ul ref={menuref} className="nav-menu">
        <li onClick={() => { setMenu("Shop") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>{t('navbar.home')}</Link>
          {menu === 'Shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("men") }}>
          <Link style={{ textDecoration: 'none' }} to='/men'>{t('navbar.men')}</Link>
          {menu === 'men' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("women") }}>
          <Link style={{ textDecoration: 'none' }} to='/women'>{t('navbar.women')}</Link>
          {menu === 'women' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>{t('navbar.kids')}</Link>
          {menu === 'kids' ? <hr /> : <></>}
        </li>
        <li>
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('authToken')
          ? <button onClick={() => { localStorage.removeItem('authToken'); window.location.replace('/') }}>{t('navbar.logout')}</button>
          : <Link to='/login'><button>{t('navbar.login')}</button></Link>}
        <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
          <p>{getTotalCArtItems()}</p>
        </div>
      </div>
      <div className="nav-lang">
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ar')}>AR</button>
      </div>
    </div>
  );
};

export default Navbar;
