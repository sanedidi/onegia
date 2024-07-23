import React from 'react';
import s from './styles.module.scss';
import { links } from './components/links';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.png'
import clsx from 'clsx';
import { CiBurger } from 'react-icons/ci';
import { BiMenu } from 'react-icons/bi';
const Header = () => {
    const firstTwoLinks = links.slice(0, 2);
    const lastTwoLinks = links.slice(2, 4);

    return (
        <div className={s.header}>
            <div className="container">
                <div className={s.header__wrapper}>
                    <div className={clsx(s.header__links, s.left)}>
                        {firstTwoLinks.map((el) => {
                            return (
                                <Link className={s.header__link} key={el.id} to={el.path}>
                                    {el.name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className={s.burger}>
                        <BiMenu fontSize={"25px"} />
                    </div>
                    <div className={s.header__logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={clsx(s.header__links, s.right)}>
                        {lastTwoLinks.map((el) => {
                            return (
                                <a className={el.name === "Join Now" ? `${clsx(s.header__link, s.join)}` : s.header__link} key={el.id} href={el.path}>
                                    {el.name}
                                </a>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;
