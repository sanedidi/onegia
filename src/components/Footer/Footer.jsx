import React from 'react'
import s from './styles.module.scss'
import logo from '../../assets/img/black_logo.png'
const Footer = () => {
    return (
        <div className={s.footer}>
            <div className="container">
                <div className={s.footer__wrapper}>
                    <div className={s.footer__left}>
                        <img src={logo} alt="" />
                        <h2>Teknor Apex company</h2>
                    </div>
                    <div className={s.footer__right}>
                        <a href="mailto:community@ongenia.com">community@ongenia.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer