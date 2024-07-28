import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import './CartItems.css';
import { ShopContext } from "../../context/ShopContext";
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
    const { t } = useTranslation();
    const { cartItems, all_product, removefromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className="cart_items">
            <div className="cart_items-main">
                <p>{t('cart.products')}</p>
                <p>{t('cart.title')}</p>
                <p>{t('cart.price')}</p>
                <p>{t('cart.quantity')}</p>
                <p>{t('cart.total')}</p>
                <p>{t('cart.remove')}</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitem-format cart_items-main">
                                <img src={e.image} alt="" className="cart-producticon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitem-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={() => { removefromCart(e.id) }} className="cart-cross-icon" alt="" />
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>{t('cart.total')}</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>{t('cart.subtotal')}</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>{t('cart.shipping_free')}</p>
                            <p>{t('cart.free')}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>{t('cart.total')}</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>{t('cart.proceed_to_checkout')}</button>
                </div>
                <div className="cartitems-promocode">
                    <p>{t('cart.promo_code_prompt')}</p>
                    <div className="promobox">
                        <input type="text" placeholder={t('cart.promo_code')} />
                        <button>{t('cart.submit')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
