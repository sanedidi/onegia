import React from 'react'
import s from './styles.module.scss'
const Join = () => {
    const btn = [
        { id: 1, text: "Industial Engineer" }, { id: 2, text: "Mechanical Engineer" }, { id: 3, text: "Electrical Engineer" }, { id: 4, text: "Materials Engineer" }, { id: 5, text: "Plastics Engineer" }, { id: 6, text: "Systems Engineer" }, { id: 7, text: "Robotics Engineer" }, { id: 8, text: "Structural Engineer" }, { id: 9, text: "Welding Engineer" }, { id: 10, text: "Process Engineer" }, { id: 11, text: "Control Systems" }, { id: 12, text: "Embedded Systems" },]
    return (
        <div className={s.join}>
            <div className="container">
                <div className={s.join__wrapper}>
                    <div className={s.join__content}>
                        <h2 className={s.join__title}>
                            Join the expert <br /> engineer network.
                        </h2>
                        <button onClick={() => window.open('https://ongenia-react-frontend.vercel.app/')}>
                            Start Now
                        </button>
                        <div className={s.join__buttons}>
                            {btn.map((el) => {
                                return (
                                    <div key={el.id} className={s.join__button}>
                                        <button className={s.join__main_button}>{el.text}</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join