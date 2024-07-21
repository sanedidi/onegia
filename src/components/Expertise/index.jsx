import React from "react";
import s from "./styles.module.scss";
import { card } from "./components/cards";
const Expertise = () => {
    return (
        <div className={s.exp}>
            <div className="container">
                <div className={s.exp__wrapper}>
                    <div className={s.exp__top}>
                        <h2>Bring your expertise to the best companies.</h2>
                        <p>We&apos;ll take care of the paper work.</p>
                    </div>
                    <div className={s.exp__cards}>
                        {card?.map((el) => {
                            return (
                                <div key={el.id} className={s.exp__card}>
                                    <div className={s.exp__card_top}>
                                        <img src={el.img} alt="" />
                                        <div
                                            style={{ background: `${el.color}` }}
                                            className={s.exp__card_line}
                                        ></div>
                                    </div>
                                    <div className={s.exp__card_content}>
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

export default Expertise;
