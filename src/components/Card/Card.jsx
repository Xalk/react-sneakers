import React, {useState} from 'react';
import plusBtn from "../../assets/plusBtn.svg";
import plusActive from "../../assets/plus-active.svg";


import inactive from "../../assets/fav-inactive.svg";

import s from "./Card.module.scss";


function Card({id, price, title, imgUrl, onClickCartAdd}) {
    const [isCartAdd, setIsCartAdd] = useState(false);

    const onClickPlus = () => {
        onClickCartAdd({id, price, title, imgUrl});
        setIsCartAdd(!isCartAdd);
    }


    return (
        <div className={s.card}>
            <img className={s.inactiveBtn} src={inactive} alt=""/>
            <img src={imgUrl} alt="snk" width="133" height="112"/>
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