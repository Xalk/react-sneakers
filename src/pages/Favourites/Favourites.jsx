import React from 'react';
import Card from "../../components/Card/Card";

function Favourites({favouriteSneakers, onClickCartAdd}) {
    return (
        <div className="content">
            <div className="contentTop">
                <h1>Избранные</h1>
            </div>
            <div className="sneakers">
                {
                    favouriteSneakers
                        .map((snk, i) => <Card key={snk.title + i}
                                               {...snk}
                                               imageUrl={snk.imageUrl}
                                               onClickCartAdd={onClickCartAdd}/>)
                }
            </div>
        </div>
    );
}

export default Favourites;