import React, { useContext, useEffect } from "react";
import './Display.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from "../../context/ShopContext";
import { useTranslation } from "react-i18next";

const Display = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { product } = props;
    const { AddToCart } = useContext(ShopContext);
    const { t } = useTranslation();

    return (
        <div className="display">
            <div className="display-left">
                <div className="display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="display-image-display">
                    <img className="main-image" src={product.image} alt="" />
                </div>
            </div>
          
            <div className="display-right">
                <h1>{product.name}</h1>
                <div className="display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className="display-right-prices">
                    <div className="display-right-price-old">${product.old_price}</div>
                    <div className="display-right-price-new">${product.new_price}</div>
                </div>

                <div className="display-right-description">
                    {product.description}
                </div>
                <div className="display-right-size">
                    <h1>{t('display.selectSize')}</h1>
                    <div className="display-right-sizes">
                        <div>{t('display.sizeS')}</div>
                        <div>{t('display.sizeM')}</div>
                        <div>{t('display.sizeL')}</div>
                        <div>{t('display.sizeXL')}</div>
                        <div>{t('display.sizeXXL')}</div>
                    </div>
                </div>
                <button onClick={() => { AddToCart(product.id) }}>{t('display.addToCart')}</button>
                <p className="display-right-category"><span>{t('display.category')}:</span> women, t-shirt, crop top</p>
                <p className="display-right-category"><span>{t('display.tags')}:</span> modern, Latest</p>
            </div>
        </div>
    );
};

export default Display;
