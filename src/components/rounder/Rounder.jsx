import React from "react";
import './Rounder.css';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import Rounder_icon from '../assets/hero_image.png';
import { useTranslation } from 'react-i18next';

const Rounder = () => {
  const { t } = useTranslation();

  return (
    <div className="Rounder">
      <div className="rounder-left">
        <h2>{t('rounder.newArrivals')}</h2>
        <div>
          <div className="hand-hand-icon">
            <p>{t('rounder.new')}</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>{t('rounder.collections')}</p>
          <p>{t('rounder.forEveryone')}</p>
        </div>
        <div className="Rounder-latest-button">
          <div>{t('rounder.latestCollection')}</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="rounder-right">
        <img src={Rounder_icon} alt="" />
      </div>
    </div>
  );
}

export default Rounder;
