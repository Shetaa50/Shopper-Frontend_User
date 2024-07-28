import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import './css/shopcategory.css';
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from '../components/assets/dropdown_icon.png'; // Fixed typo in import
import Item from "../components/item/Item";

const ShopCategory = (props) => {
    const { t } = useTranslation();
    const { all_product } = useContext(ShopContext);

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexsort">
                <p>
                    <span>{t('shopCategory.showing')} 1-12</span> {t('shopCategory.outOf')} 36 {t('shopCategory.products')}
                </p>
                <div className="shopcategory-sort">
                    {t('shopCategory.sortBy')} <img src={dropdown_icon} alt="" />
                </div>
            </div>

            <div className="shopcategory-product">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            <div className="shopcategory-loadmore">
                {t('shopCategory.exploreMore')}
            </div>
        </div>
    );
};

export default ShopCategory;
