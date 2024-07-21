import React from "react";
import s from "./styles.module.scss";
import logo from "../../assets/svg/logo.png";
import { workCard } from './components/index'
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
                    <div className={s.word__cards}>
                        {workCard.map((el) => {
                            return (
                                <div key={el.id} className={s.work__card}>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
