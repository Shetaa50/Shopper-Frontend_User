import React from "react";
import './offers.css';
import exclusive_image from '../assets/exclusive_image.png';
import { useTranslation } from 'react-i18next';

const Offers = () => {
  const { t } = useTranslation();

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>{t('offers.exclusives')}</h1>
        <h1>{t('offers.offersForYou')}</h1>
        <p>{t('offers.bestsellersOnly')}</p>
        <button>{t('offers.checkNow')}</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
