import React from "react";
import s from "./styles.module.scss";
import logo from "../../assets/svg/logo.png";
import line from "../../assets/img/line.png";
import { workCard } from './components/index'
import { BsArrowRight } from "react-icons/bs";
const Work = () => {
    return (
        <div className={s.work}>
            <div className="container">
                <div className={s.work__wrapper}>
                    <div className={s.work__title}>
                        <h2>How</h2>
                        <img src={logo} alt="" />
                        <h2>works</h2>
                    </div>
                    <div className={s.work__cards}>
                        {workCard.map((el) => {
                            return (
                                <div key={el.id} className={s.work__card}>
                                    <div className={s.work__card_num}>
                                        <h2>{el.id}.</h2>
                                        <div className={el.id === 4 ? s.noLine : s.work__container}>
                                            <div className={s.work__line}></div>
                                            <div className={s.work__arrow_right}></div>
                                        </div>

                                    </div>
                                    <div className={s.work__text}>
                                        <div className={s.work__card_title}>
                                            <h2>  {el.title}</h2>
                                        </div>
                                        <div className={s.work__card_text}>
                                            <p>{el.text}</p>
                                            <p>{el.text2}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <button className={s.work__button}>Start now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
