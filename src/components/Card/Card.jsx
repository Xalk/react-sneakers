import React, {useContext, useState} from 'react';
import plusBtn from "../../assets/plusBtn.svg";
import plusActive from "../../assets/plus-active.svg";


import activeFav from "../../assets/fav-active.svg";
import inactiveFav from "../../assets/fav2.jpg";


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
                  loading = false,
                  favourited = false,
                  isOnFavPage = false,
                  parentId,
                  ...props
              }) {


    const {isItemCartAdded, onClickFavRemove, height, width} = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favourited);
    const obj = {id, parentId: id, price, title, imageUrl};

    const onClickPlus = () => {
        onClickCartAdd(obj);
    }

    const onClickFav = () => {
        onAddFavourite(obj);
        setIsFavorite(!isFavorite);
    }
    const onRemove = () => {
        onClickFavRemove(obj)
    }




    return (
        <div className={s.card}>
            {
                loading ? <SkeletonLoader width={width} props={props}/> : <>
                        <img className={s.inactiveBtn} src={isFavorite ? activeFav : inactiveFav} alt=""
                             onClick={isOnFavPage ? onRemove : onClickFav}/>
                        <img src={imageUrl} alt="snk" className={s.snkImage}/>
                        <p>{title}</p>
                        <div className={s.snkInfo}>
                            <div className={s.price}>
                                <p>Price:</p>
                                <strong>{"$" + price}</strong>
                            </div>
                            {
                                onClickCartAdd &&
                                <img src={isItemCartAdded(id) ? plusActive : plusBtn} alt="plusBtn" className={s.plusBtn}
                                     onClick={onClickPlus}/>
                            }

                        </div>
                    </>
            }

        </div>
    );
}


function SkeletonLoader({width, ...props}) {
    let isRightWidth = width < 600;
    return (
        <ContentLoader
            speed={2}
            width={isRightWidth ? 235 : 180}
            height={isRightWidth ? 286 : 220}
            viewBox={`0 0 ${isRightWidth ? "235 286" : "200 240"}`}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            {
                isRightWidth ? <>
                    <rect x="198" y="253" rx="3" ry="3" width="32" height="32"/>
                    <rect x="0" y="0" rx="10" ry="10" width="232" height="195"/>
                    <rect x="0" y="208" rx="3" ry="3" width="232" height="14"/>
                    <rect x="0" y="231" rx="3" ry="3" width="122" height="14"/>
                    <rect x="0" y="267" rx="3" ry="3" width="75" height="15"/>
                </> : <>
                    <rect x="306" y="78" rx="3" ry="3" width="88" height="6"/>
                    <rect x="0" y="0" rx="10" ry="10" width="155" height="112"/>
                    <rect x="0" y="137" rx="3" ry="3" width="155" height="16"/>
                    <rect x="0" y="160" rx="3" ry="3" width="120" height="16"/>
                    <rect x="0" y="203" rx="3" ry="3" width="59" height="24"/>
                    <rect x="130" y="195" rx="3" ry="3" width="32" height="32"/>
                </>
            }

        </ContentLoader>
    );
}


export default Card;
