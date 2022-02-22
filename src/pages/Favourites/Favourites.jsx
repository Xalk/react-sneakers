import React, {useContext} from 'react';
import Card from "../../components/Card/Card";
import AppContext from "../../context";
import InfoBox from "../../components/common/InfoBox";
import emptyFavs from "../../assets/emptyFavs.png"
import {useNavigate} from "react-router-dom";

function Favourites({onClickCartAdd, onAddFavourite}) {

    const {favouriteSneakers} = useContext(AppContext);
    let navigate = useNavigate();

    const onClickBtn = () => {
        navigate("/");
    }

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
                                                   {...snk}
                                                   imageUrl={snk.imageUrl}
                                                   onClickCartAdd={onClickCartAdd}
                                                   onAddFavourite={onAddFavourite}
                                                   favourited={true}
                            />)
                    }
                </div> : <InfoBox title={"Закладок нет :("}
                                  text={"Вы ничего не добавляли в закладки"}
                                  image={emptyFavs}
                                  onClick={onClickBtn}/>
            }

        </div>
    );
}

export default Favourites;