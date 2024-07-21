import React from "react";
import s from "./styles.module.scss";
import absImg from '../../assets/img/hero-abs.png'
const Hero = () => {
    return (
        <div className={s.hero}>
            <div className="container">
                <div className={s.hero__wrapper}>
                    <div className={s.hero__content}>
                        <h2 className={s.hero__title}>
                            Unlock your engineering potential.
                        </h2>
                        <p className={s.hero__text}>
                            Join our expert network and work with leading manufacturing and
                            industrial companies on diverse engineering projects, in short
                            side-gigs or longer term engagements.
                        </p>
                        <button>
                            Join Now
                        </button>
                    <img className={s.hero__img} src={absImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
