import React from "react";
import s from "./styles.module.scss";
import { cards } from "./components/cards";
const Capital = () => {
    return (
        <div className={s.cap}>
            <div className="container">
                <div className={s.cap__wrapper}>
                    <div className={s.cap__left}>
                        <h2>Capitalize your expertise, grow new skills</h2>
                        <p>and 6 other reasons to work with us</p>
                    </div>
                    <div className={s.cap__right}>
                        {cards.map((el) => {
                            return (
                                <div key={el.id} className={s.cap__card}>
                                    <div className={s.cap__card_img}>
                                        <img src={el.img} alt="" />
                                    </div>
                                    <div className={s.cap__card_text}>
                                        <h2>{el.title}</h2>
                                        <p>{el.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Capital;
