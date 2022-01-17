import './App.scss';

import logo from "./assets/logo.png";
import cart from "./assets/cart.svg";
import fav from "./assets/favourites.svg";
import user from "./assets/user.svg";
import snk1 from "./assets/sneakers/1.jpg";
import plusBtn from "./assets/plusBtn.svg";

function App() {
    return (
        <div className="wrapper">
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
                <h1>Все кроссовки</h1>
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
