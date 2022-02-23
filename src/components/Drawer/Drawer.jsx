import React, {useContext} from 'react';
import removeCartItem from "../../assets/removeCartItemBtn.svg";
import arrow from "../../assets/arrow.svg";
import emptyBox from "../../assets/emptyBox.png";
import orderComplete from "../../assets/orderComplete.png";

import s from "./Drawer.module.scss";
import InfoBox from "../common/InfoBox";
import AppContext from "../../context";
import axios from "axios";

function Drawer({onClickCloseCart, onClickCartRemove}) {

    const {setIsCartOpened, cartSneakers, setCartSneakers} = useContext(AppContext);


    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onCloseCart = () => {
        setIsCartOpened(false)
    }


    const onClickOrder = async () => {
        setIsLoading(true);
        const {data} = await axios.post("https://61f82d51783c1d0017c4461b.mockapi.io/orders", {
            items: cartSneakers
        })

        for (let i = 0; i < cartSneakers.length; i++) {
            const item = cartSneakers[i];
            await axios.delete(`https://61f82d51783c1d0017c4461b.mockapi.io/cart/${item.id}`);
        }


        setOrderId(data.id);
        setIsOrderComplete(true);
        setCartSneakers([]);
        setIsLoading(false);
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
                                <button className={s.greenBtn} onClick={onClickOrder} disabled={isLoading}>Оформить заказ
                                    <img src={arrow} alt=""/></button>
                            </div>
                        </>

                        : <InfoBox title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                                   text={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                                   image={isOrderComplete ? orderComplete : emptyBox}
                                   onClick={onCloseCart}
                        />
                }


            </div>
        </div>
    );
}

export default Drawer;