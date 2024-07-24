import React from "react";
import s from "./styles.module.scss";
import absImg from '../../assets/img/hero-abs.png'
import { Abs } from "../../assets/svg/svg";
const Hero = () => {
    return (
        <div className={s.hero}>
            <div className="container">
                <div className={s.hero__wrapper}>
                    <div className={s.hero__content}>
                        <div className={s.hero__border}></div>
                        <h2 className={s.hero__title}>
                            Unlock your <br /> engineering potential.
                        </h2>
                        <p className={s.hero__text}>
                            Join our expert network and work with leading manufacturing and
                            industrial companies on diverse engineering projects, in short
                            side-gigs or longer term engagements.
                        </p>
                        <button onClick={() => window.open('https://ongenia-react-frontend.vercel.app/')}>
                            Join Now
                        </button>
                        <div className={s.hero__img}>
                            <Abs />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
