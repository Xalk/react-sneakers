import React from 'react';
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";
import fav from "../../assets/favourites.svg";
import user from "../../assets/user.svg";

import s from "./Header.module.scss";
import {Link} from "react-router-dom";

function Header({onClickCart}) {
    return (
        <header>
            <Link to="/">
                <div className={s.leftSide}>
                    <img src={logo} alt="logo" width="40" height="40"/>
                    <ul>
                        <li>REACT SNEAKERS</li>
                        <li>Магазин лучших кроссовок</li>
                    </ul>
                </div>
            </Link>
            <div className={s.rightSide}>
                <div className={s.cart}>
                    <img src={cart} alt="cart" className={s.imgCart} onClick={onClickCart}/>
                    <span>1205 руб.</span>
                </div>
                <Link to="/favourites">
                    <div className={s.favourites}>
                        <img src={fav} alt="fav"/>
                    </div>
                </Link>

                <div className={s.user}>
                    <img src={user} alt="user"/>
                </div>
            </div>
        </header>
    );
}

export default Header;