import React from 'react';
import s from './styles.module.scss';
import { links } from './components/links';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.png'
const Header = () => {
    const firstTwoLinks = links.slice(0, 2);
    const lastTwoLinks = links.slice(2, 4);

    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.header__wrapper}>
                    <div className={s.header__links}>
                        {firstTwoLinks.map((el) => {
                            return (
                                <Link className={s.header__link} key={el.id} to={el.path}>
                                    {el.name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className={s.header__logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={s.header__links}>
                        {lastTwoLinks.map((el) => {
                            return (
                                <Link className={s.header__link} key={el.id} to={el.path}>
                                    {el.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
