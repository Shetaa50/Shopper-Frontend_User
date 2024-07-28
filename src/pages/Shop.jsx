import React from "react";
import Rounder from "../components/rounder/Rounder";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import NewCollections from "../components/new-collections/NewCollections";
import NewsLetter from "../components/newsletter/NewsLetter";
// import { useTranslation } from 'react-i18next';
// import { useEffect } from "react";
const Shop = ()=>{
    // const { i18n } = useTranslation();

    // const changeLanguage = (lng) => {
    //   console.log('lng', lng);
    //   i18n.changeLanguage(lng);
    // };
  
    // useEffect(() => {
    //   document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    // }, [i18n.language]);
    return(
        <div>
            <Rounder />
            <Popular/>
            <Offers/>
            <NewCollections />
            <NewsLetter/>
        </div>
    )
}
export default Shop 