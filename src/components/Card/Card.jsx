import React, {useContext, useState} from 'react';
import plusBtn from "../../assets/plusBtn.svg";
import plusActive from "../../assets/plus-active.svg";


import inactiveFav from "../../assets/fav-inactive.svg";
import activeFav from "../../assets/fav-active.svg";

import s from "./Card.module.scss";

import ContentLoader from "react-content-loader"
import AppContext from "../../context";

function Card({
                  id,
                  price,
                  title,
                  imageUrl,
                  onClickCartAdd,
                  onAddFavourite,
                  favourited,
                  added,
                  loading,
                  ...props
              }) {


    const {isItemCartAdded, isItemFavAdded} = useContext(AppContext);


    const onClickPlus = () => {
        onClickCartAdd({id, price, title, imageUrl});
    }

    const onClickFav = () => {
        onAddFavourite({id, price, title, imageUrl});
    }


    return (
        <div className={s.card}>
            {
                loading ? <ContentLoader
                    speed={2}
                    width={210}
                    height={220}
                    viewBox="0 0 211 240"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="306" y="78" rx="3" ry="3" width="88" height="6"/>
                    <rect x="0" y="0" rx="10" ry="10" width="155" height="112"/>
                    <rect x="0" y="137" rx="3" ry="3" width="155" height="16"/>
                    <rect x="0" y="160" rx="3" ry="3" width="120" height="16"/>
                    <rect x="0" y="203" rx="3" ry="3" width="59" height="24"/>
                    <rect x="130" y="195" rx="3" ry="3" width="32" height="32"/>
                </ContentLoader> : <>
                    <img className={s.inactiveBtn} src={isItemFavAdded(id) ? activeFav : inactiveFav} alt=""
                         onClick={onClickFav}/>
                    <img src={imageUrl} alt="snk" width="133" height="112"/>
                    <p>{title}</p>
                    <div className={s.snkInfo}>
                        <div className={s.price}>
                            <p>Цена:</p>
                            <strong>{price + " руб."}</strong>
                        </div>
                        <img src={isItemCartAdded(id) ? plusActive : plusBtn} alt="plusBtn" className={s.plusBtn}
                             onClick={onClickPlus}/>
                    </div>
                </>
            }

        </div>
    );
}

export default Card;