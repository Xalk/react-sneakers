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
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/items").then(res => {
            setSneakers(res.data);
        })
        axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/cart").then(res => {
            setCartSneakers(res.data);
        })
    }, [])


    const onClickCartAdd = (obj) => {
        // let checked = cartSneakers.some(s => s.id === obj.id);
        // if (checked) {
        //     setCartSneakers(prev => prev.filter(s => s.id !== obj.id))
        // } else {
        //     setCartSneakers(prev => [...prev, obj])
        // }
        axios.post("https://61f82d51783c1d0017c4461b.mockapi.io/cart", obj);

        setCartSneakers(prev => [...prev, obj])
    }

    const onClickCartRemove = (obj) => {
        axios.delete(`https://61f82d51783c1d0017c4461b.mockapi.io/cart/${obj.id}`);
        setCartSneakers(prev => prev.filter(s => s.id !== obj.id))
    }


    return (
        <div className="wrapper">
            {isCartOpened && <Drawer onClickCloseCart={() => setIsCartOpened(false)}
                                     cartSneakers={cartSneakers}
                                     onClickCartRemove={onClickCartRemove}/>}

            <Header onClickCart={() => setIsCartOpened(true)}/>
            <div className="content">
                <div className="contentTop">
                    {
                        searchValue ? <h1>{`Поиск по запросу: "${searchValue}"`}</h1> : <h1>Все кроссовки</h1>
                    }
                    <div className="searchBlock">
                        <img src={search} alt="search"/>
                        <input type="text" placeholder="Поиск..." value={searchValue}
                               onChange={(e) => setSearchValue(e.target.value)}/>
                    </div>
                </div>
                <div className="sneakers">
                    {
                        sneakers
                            .filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((snk, i) => <Card key={snk.title + i}
                                                   {...snk}
                                                   imgUrl={snk.imageUrl}
                                                   onClickCartAdd={onClickCartAdd}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
