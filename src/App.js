import './App.scss';

import logo from "./assets/logo.png";
import cart from "./assets/cart.svg";
import fav from "./assets/favourites.svg";
import user from "./assets/user.svg";
import snk1 from "./assets/sneakers/1.jpg";
import plusBtn from "./assets/plusBtn.svg";
import search from "./assets/search.svg";
import favInactive from "./assets/fav-inactive.svg";
import removeCartItem from "./assets/removeCartItemBtn.svg";
import arrow from "./assets/arrow.svg";

function App() {
    return (
        <div className="wrapper">
            <div className="overlay">
                <div className="drawer">
                    <p>Корзина</p>
                    <div className="cartItems">
                        <div className="item">
                            <img src={snk1} alt="snk1" width="70" height="70"/>
                            <div className="cartInfo">
                                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <strong>12 999 руб.</strong>
                            </div>
                            <button>
                                <img src={removeCartItem} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="totalBlock">
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
                        <button className="greenBtn">Оформить заказ
                            <img src={arrow} alt=""/></button>
                    </div>
                </div>
            </div>

            <header>
                <div className="leftSide">
                    <img src={logo} alt="logo" width="40" height="40"/>
                    <ul>
                        <li>REACT SNEAKERS</li>
                        <li>Магазин лучших кроссовок</li>
                    </ul>
                </div>
                <div className="rightSide">
                    <div className="cart">
                        <img src={cart} alt="cart"/>
                        <span>1205 руб.</span>
                    </div>
                    <div className="favourites">
                        <img src={fav} alt="fav"/>
                    </div>
                    <div className="user">
                        <img src={user} alt="user"/>
                    </div>
                </div>
            </header>
            <div className="content">
                <div className="contentTop">
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img src={search} alt="search"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="sneakers">
                    <div className="card">
                        <img src={snk1} alt="snk1" width="133" height="112"/>
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className="snkInfo">
                            <div className="price">
                                <p>Цена:</p>
                                <strong>12 999 руб.</strong>
                            </div>
                            <button className="plus">
                                <img src={plusBtn} alt="plusBtn"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img className="inactiveBtn" src={favInactive} alt="favActive" width="32" height="32"/>
                        <img src={snk1} alt="snk1" width="133" height="112"/>
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className="snkInfo">
                            <div className="price">
                                <p>Цена:</p>
                                <strong>12 999 руб.</strong>
                            </div>
                            <button className="plus">
                                <img src={plusBtn} alt="plusBtn"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={snk1} alt="snk1" width="133" height="112"/>
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div className="snkInfo">
                            <div className="price">
                                <p>Цена:</p>
                                <strong>12 999 руб.</strong>
                            </div>
                            <button className="plus">
                                <img src={plusBtn} alt="plusBtn"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
