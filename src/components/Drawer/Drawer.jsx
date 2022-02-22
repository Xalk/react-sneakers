import React, {useContext} from 'react';
import removeCartItem from "../../assets/removeCartItemBtn.svg";
import arrow from "../../assets/arrow.svg";
import emptyBox from "../../assets/emptyBox.png";

import s from "./Drawer.module.scss";
import InfoBox from "../common/InfoBox";
import AppContext from "../../context";

function Drawer({onClickCloseCart, onClickCartRemove, cartSneakers}) {

    const {setIsCartOpened} = useContext(AppContext);

    const onCloseCart = () => {
        setIsCartOpened(false)
    }

    return (
        <div className="overlay">
            <div className={s.drawer}>
                <div className={s.drawerTop}>
                    <p>Корзина</p>
                    <img src={removeCartItem} alt="closeCart" onClick={onClickCloseCart}/>
                </div>
                {
                    cartSneakers.length > 0 ? <>
                            <div className={s.cartItems}>
                                {
                                    cartSneakers.map((sn, i) => <div className={s.item} key={sn.title + i}>
                                        <img src={sn.imageUrl} alt="snk1" width="70" height="70"/>
                                        <div className={s.cartInfo}>
                                            <p>{sn.title}</p>
                                            <strong>{sn.price + " руб."}</strong>
                                        </div>
                                        <button onClick={e => onClickCartRemove(sn)}>
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
                        </>

                        : <InfoBox title={"Корзина пустая"}
                                   text={"Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                                   image={emptyBox}
                                   onClick={onCloseCart}
                        />
                }


            </div>
        </div>
    );
}

export default Drawer;