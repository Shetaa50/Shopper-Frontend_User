import React from "react";
import { useTranslation } from "react-i18next";
import './Piece.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Piece = (props) => {
    const { t } = useTranslation();
    const { product } = props;

    return (
        <div className="piece">
            {t('breadcrumb.home')} <img src={arrow_icon} alt="" /> {t('breadcrumb.shop')} <img src={arrow_icon} alt="" /> {t(`categories.${product.category}`)} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    );
}

export default Piece;
