import React from 'react';
import removeCartItem from "../../assets/removeCartItemBtn.svg";
import arrow from "../../assets/arrow.svg";

import s from "./Drawer.module.scss";

function Drawer({onClickCloseCart, onClickCartRemove, cartSneakers}) {
    return (
        <div className="overlay">
            <div className={s.drawer}>
                <div className={s.drawerTop}>
                    <p>Корзина</p>
                    <img src={removeCartItem} alt="closeCart" onClick={onClickCloseCart}/>
                </div>
                <div className={s.cartItems}>
                    {
                        cartSneakers.map((sn,i) => <div className={s.item} key={sn.title+i}>
                            <img src={sn.imgUrl} alt="snk1" width="70" height="70"/>
                            <div className={s.cartInfo}>
                                <p>{sn.title}</p>
                                <strong>{sn.price + " руб."}</strong>
                            </div>
                            <button onClick={e=>onClickCartRemove(sn)}>
                                <img src={removeCartItem} alt=""/>
                            </button>
                        </div>)
                    }

                </div>
                <div className={s.totalBlock}>
                    <ul>
                        <li>
                            <p>Итого:</p>
                            <div></div>
                            <strong>21 498 руб.</strong>
                        </li>
                        <li>
                            <p>Налог 5%:</p>
                            <div></div>
                            <strong>1074 руб.</strong>
                        </li>
                    </ul>
                    <button className={s.greenBtn}>Оформить заказ
                        <img src={arrow} alt=""/></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;