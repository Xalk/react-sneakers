import React, {useContext} from 'react';
import Card from "../../components/Card/Card";
import AppContext from "../../context";

function Favourites({onClickCartAdd, onAddFavourite}) {

    const {favouriteSneakers} = useContext(AppContext);


    return (
        <div className="content">
            <div className="contentTop">
                <h1>Избранные</h1>
            </div>
            <div className="sneakers">
                {
                    favouriteSneakers
                        .map((snk, i) => <Card key={i}
                                               {...snk}
                                               imageUrl={snk.imageUrl}
                                               onClickCartAdd={onClickCartAdd}
                                               onAddFavourite={onAddFavourite}
                                               favourited={true}
                        />)
                }
            </div>
        </div>
    );
}

export default Favourites;