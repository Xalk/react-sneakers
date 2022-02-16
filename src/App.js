import './App.scss';


import Header from "./components/Header/Header";
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
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            const resSnk = await axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/items");
            const resCart = await axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/cart");
            const resFav = await axios.get("https://61f82d51783c1d0017c4461b.mockapi.io/favourites");
            setLoading(false)

            setCartSneakers(resCart.data);
            setFavouriteSneakers(resFav.data)
            setSneakers(resSnk.data);


        }
        fetchData();

    }, [])


    const onClickCartAdd = (obj) => {

        if(cartSneakers.some(s => +s.id === +obj.id)){
            axios.delete(`https://61f82d51783c1d0017c4461b.mockapi.io/cart/${obj.id}`);
            setCartSneakers(prev => prev.filter(s => +s.id !== +obj.id))
        }else{
            axios.post("https://61f82d51783c1d0017c4461b.mockapi.io/cart", obj);
            setCartSneakers(prev => [...prev, obj])
        }

    }

    const onClickCartRemove = (obj) => {
        axios.delete(`https://61f82d51783c1d0017c4461b.mockapi.io/cart/${obj.id}`);
        setCartSneakers(prev => prev.filter(s => s.id !== obj.id))
    }

    const onAddFavourite = async (obj) => {
        try {
            if (favouriteSneakers.some(s => s.id === obj.id)) {
                axios.delete(`https://61f82d51783c1d0017c4461b.mockapi.io/favourites/${obj.id}`);
                setFavouriteSneakers(prev => prev.filter(s => s.id !== obj.id))
            } else {
                let {data} = await axios.post("https://61f82d51783c1d0017c4461b.mockapi.io/favourites", obj);
                setFavouriteSneakers(prev => [...prev, data])
            }
        } catch (e) {
            alert("Error")
        }


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
                                               cartSneakers={cartSneakers}
                                               loading={loading}
                />}/>


                <Route path="/favourites" exact
                       element={<Favourites favouriteSneakers={favouriteSneakers}
                                            onClickCartAdd={onClickCartAdd}
                                            onAddFavourite={onAddFavourite}
                       />}/>
            </Routes>


        </div>
    );
}

export default App;
