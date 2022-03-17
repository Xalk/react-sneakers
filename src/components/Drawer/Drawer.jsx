import React, {useContext} from 'react';
import removeCartItem from "../../assets/removeCartItemBtn.svg";
import arrow from "../../assets/arrow.svg";
import emptyBox from "../../assets/emptyBox.png";
import orderComplete from "../../assets/orderComplete.png";

import s from "./Drawer.module.scss";
import InfoBox from "../common/InfoBox";
import AppContext from "../../context";
import axios from "axios";

function Drawer({onClickCloseCart, onClickCartRemove, isCartOpened}) {

    const {setIsCartOpened, cartSneakers, setCartSneakers} = useContext(AppContext);


    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onCloseCart = () => {
        setIsCartOpened(false)
    }


    const onClickOrder = async () => {
        try{
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
        }catch (e) {
            alert("Error");
            console.log(e);
        }


    }


    return (
        <div className={`${s.overlay} ${isCartOpened ? s.overlayOut : ""}`}>
            <div className={s.drawer}>
                <div className={s.drawerTop}>
                    <p>Shopping Cart</p>
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
                                            <strong>{"$" + sn.price}</strong>
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
                                        <p>Total:</p>
                                        <div></div>
                                        <strong>${
                                            cartSneakers.reduce((res, item) => res + item.price, 0)
                                        }</strong>
                                    </li>
                                    <li>
                                        <p>Tax 5%:</p>
                                        <div></div>
                                        <strong>${
                                            (cartSneakers.reduce((res, item) => res + item.price, 0) * 0.05).toFixed(2)
                                        }</strong>
                                    </li>
                                </ul>
                                <button className={s.greenBtn} onClick={onClickOrder} disabled={isLoading}>Buy
                                    <img src={arrow} alt=""/></button>
                            </div>
                        </>

                        : <InfoBox title={isOrderComplete ? "Order is processed!" : "Shopping Cart is empty"}
                                   text={isOrderComplete ? `Your order #${orderId} will be delivered to courier delivery soon` : "Add at least one pair of sneakers to make an order."}
                                   image={isOrderComplete ? orderComplete : emptyBox}
                                   onClick={onCloseCart}
                        />
                }


            </div>
        </div>
    );
}

export default Drawer;