import s from "../Drawer/Drawer.module.scss";
import arrow from "../../assets/arrow.svg";


const InfoBox = ({title, text, image, onClick}) => {



    return (
        <div className={s.infoBlock}>
            <img src={image} alt=""/>
            <h2>{title}</h2>
            <p>{text}</p>
            <button className={s.greenBtn} onClick={e => onClick()}>
                <img src={arrow} alt=""/>
                Вернуться назад
            </button>
        </div>
    );
};

export default InfoBox;