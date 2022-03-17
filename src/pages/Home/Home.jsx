import React from 'react';
import search from "../../assets/search.svg";
import Card from "../../components/Card/Card";


function Home({
                  searchValue,
                  setSearchValue,
                  onClickCartAdd,
                  onAddFavourite,
                  sneakers,
                  loading,
                  isItemFavAdded,
                  width
              }) {


    const renderSneakers = () => {
        const filteredSnk = sneakers.filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (loading ? [...Array(10)] : filteredSnk)
            .map((snk, i) => <Card
                    key={i}
                    {...snk}
                    onClickCartAdd={onClickCartAdd}
                    onAddFavourite={(obj) => onAddFavourite(obj)}
                    loading={loading}
                    favourited={isItemFavAdded(snk && snk.id)}
                />
            )
    }


    return (
        <div className="content">
            <div className={`contentTop ${width < 600 ? "contentTop600" : ""}`}>
                {
                    searchValue ? <h1>{`Search by name: "${searchValue}"`}</h1> : <h1>All sneakers</h1>
                }
                <div className="searchBlock">
                    <img src={search} alt="search"/>
                    <input type="text" placeholder="Search..." value={searchValue}
                           onChange={(e) => setSearchValue(e.target.value)}/>
                </div>
            </div>
            <div className="sneakers">
                {
                    renderSneakers()
                }
            </div>
        </div>
    );
}


export default Home;