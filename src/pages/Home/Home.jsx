import React from 'react';
import search from "../../assets/search.svg";
import Card from "../../components/Card/Card";

function Home({searchValue, setSearchValue, onClickCartAdd, onAddFavourite, sneakers}) {
    return (
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
                                               onClickCartAdd={onClickCartAdd}
                                               onAddFavourite={onAddFavourite}
                        />)
                }
            </div>
        </div>
    );
}

export default Home;