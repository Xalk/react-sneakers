import React, {useContext} from 'react';
import Card from "../../components/Card/Card";
import AppContext from "../../context";
import InfoBox from "../../components/common/InfoBox";
import emptyFavs from "../../assets/emptyFavs.png"
import {useNavigate} from "react-router-dom";

function Favourites({onClickCartAdd, onAddFavourite,isItemFavAdded}) {

    const {favouriteSneakers} = useContext(AppContext);
    let navigate = useNavigate();

    const onClickHomeBtn = () => {
        navigate("/");
    }

    // FIX FAVOURITES BUG

    return (
        <div className="content">
            <div className="contentTop">
                <h1>Избранные</h1>
            </div>
            {
                favouriteSneakers.length > 0 ? <div className="sneakers">
                    {
                        favouriteSneakers
                            .map((snk, i) => <Card key={i}
                                                   id={snk.id}
                                                   parentId={snk.parentId}
                                                   price={snk.price}
                                                   title={snk.title}
                                                   imageUrl={snk.imageUrl}
                                                   onClickCartAdd={onClickCartAdd}
                                                   onAddFavourite={onAddFavourite}
                                                   favourited={true}
                                                   isOnFavPage={true}

                            />)
                    }
                </div> : <InfoBox title={"Закладок нет :("}
                                  text={"Вы ничего не добавляли в закладки"}
                                  image={emptyFavs}
                                  onClick={onClickHomeBtn}/>
            }

        </div>
    );
}

export default Favourites;