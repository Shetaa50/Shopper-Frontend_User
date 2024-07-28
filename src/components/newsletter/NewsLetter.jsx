import React from "react";
import './NewsLetter.css';
import { useTranslation } from 'react-i18next';

const NewsLetter = () => {
  const { t } = useTranslation();

  return (
    <div className="newsletter">
      <h1>{t('newsletter.getOffers')}</h1>
      <p>{t('newsletter.subscribe')}</p>
      <div>
        <input type="email" placeholder={t('newsletter.placeholder')} />
        <button>{t('newsletter.subscribeButton')}</button>
      </div>
    </div>
  );
}

export default NewsLetter;
