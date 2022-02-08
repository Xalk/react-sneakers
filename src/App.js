import './App.scss';


import search from "./assets/search.svg";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import {useEffect, useState} from "react";
import axios from "axios";
import Home from "./pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Favourites from "./pages/Favourites/Favourites";

function App() {

    const [sneakers, setSneakers] = useState([]);
    const [cartSneakers, setCartSneakers] = useState([]);
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [favouriteSneakers, setFavouriteSneakers] = useState([]);


    useEffect(() => {
        axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/items").then(res => {
            setSneakers(res.data);
        })
        axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/cart").then(res => {
            setCartSneakers(res.data);
        })
        axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/favourites").then(res => {
            setFavouriteSneakers(res.data);
        })
    }, [])


    const onClickCartAdd = (obj) => {

        axios.post("https://61f82d51783c1d0017c4461b.mockapi.io/cart", obj);

        setCartSneakers(prev => [...prev, obj])
    }

    const onClickCartRemove = (obj) => {
        axios.delete(`https://61f82d51783c1d0017c4461b.mockapi.io/cart/${obj.id}`);
        setCartSneakers(prev => prev.filter(s => s.id !== obj.id))
    }

    const onAddFavourite = (obj) => {
        axios.post("https://61f82d51783c1d0017c4461b.mockapi.io/favourites", obj);
        setFavouriteSneakers(prev => [...prev, obj])
    }

    return (
        <div className="wrapper">
            {isCartOpened && <Drawer onClickCloseCart={() => setIsCartOpened(false)}
                                     cartSneakers={cartSneakers}
                                     onClickCartRemove={onClickCartRemove}/>}


            <Header onClickCart={() => setIsCartOpened(true)}/>

            <Routes>
                <Route path="/" element={<Home searchValue={searchValue}
                                               setSearchValue={setSearchValue}
                                               onClickCartAdd={onClickCartAdd}
                                               sneakers={sneakers}
                                               onAddFavourite={onAddFavourite}
                />}/>


                <Route path="/favourites" exact
                       element={<Favourites favouriteSneakers={favouriteSneakers}
                                            onClickCartAdd={onClickCartAdd}/>}/>
            </Routes>



        </div>
    );
}

export default App;
