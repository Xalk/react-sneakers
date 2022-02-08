import React, {useState} from 'react';
import plusBtn from "../../assets/plusBtn.svg";
import plusActive from "../../assets/plus-active.svg";


import inactiveFav from "../../assets/fav-inactive.svg";
import activeFav from "../../assets/fav-active.svg";

import s from "./Card.module.scss";


function Card({id, price, title, imageUrl, onClickCartAdd, onAddFavourite}) {

    const [isCartAdd, setIsCartAdd] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);

    const onClickPlus = () => {
        onClickCartAdd({id, price, title, imageUrl});
        setIsCartAdd(!isCartAdd);
    }

    const onClickFav = () => {
        onAddFavourite({id, price, title, imageUrl});
        setIsFavourite(!isFavourite);
    }

    return (
        <div className={s.card}>
            <img className={s.inactiveBtn} src={isFavourite ? activeFav : inactiveFav} alt="" onClick={onClickFav}/>
            <img src={imageUrl} alt="snk" width="133" height="112"/>
            <p>{title}</p>
            <div className={s.snkInfo}>
                <div className={s.price}>
                    <p>Цена:</p>
                    <strong>{price + " руб."}</strong>
                </div>
                <img src={isCartAdd ? plusActive : plusBtn} alt="plusBtn" className={s.plusBtn} onClick={onClickPlus}/>
            </div>
        </div>
    );
}

export default Card;