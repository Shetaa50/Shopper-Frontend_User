import React from "react";
import './Footer.css';
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';
import pintester_icon from '../assets/pintester_icon.png';
import { useTranslation } from 'react-i18next';

const Footer = ({changeLanguage}) => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Shopper</p>
      </div>
      <ul className="footer-links">
        <li>{t('footer.company')}</li>
        <li>{t('footer.products')}</li>
        <li>{t('footer.offices')}</li>
        <li>{t('footer.about')}</li>
        <li>{t('footer.contact')}</li>
      </ul>
      <div className="social-footer-icons">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>{t('footer.copyright')}</p>
      </div>
    </div>
  );
}

export default Footer;
