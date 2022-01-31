import './App.scss';


import search from "./assets/search.svg";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [sneakers, setSneakers] = useState([]);
    const [cartSneakers, setCartSneakers] = useState([]);
    const [isCartOpened, setIsCartOpened] = useState(false);

    useEffect(() => {
        axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/items").then(res => {
            setSneakers(res.data);
        })
    }, [])


    const onClickCartAdd = (obj) => {
        let checked = cartSneakers.some(s => s.title === obj.title);
        if (checked) {
            setCartSneakers(prev => prev.filter(s => s.title !== obj.title))
        } else {
            setCartSneakers(prev => [...prev, obj])
        }
    }

    const onClickCartRemove = (obj) => {
        console.log(obj)
        setCartSneakers(prev => prev.filter(s => s.title !== obj.title))
    }


    return (
        <div className="wrapper">
            {isCartOpened && <Drawer onClickCloseCart={() => setIsCartOpened(false)}
                                     cartSneakers={cartSneakers}
                                     onClickCartRemove={onClickCartRemove}/>}

            <Header onClickCart={() => setIsCartOpened(true)}/>
            <div className="content">
                <div className="contentTop">
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img src={search} alt="search"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="sneakers">
                    {
                        sneakers.map((snk, i) => <Card title={snk.title} key={snk.title + i}
                                                       price={snk.price}
                                                       imgUrl={snk.imageUrl}
                                                       onClickCartAdd={onClickCartAdd}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
