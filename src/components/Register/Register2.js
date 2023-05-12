import { Link, Redirect } from 'react-router-dom';
import { useState } from 'react';
import './Register.css';
import logo from '../../images/header__logo.svg';

// const name = " Виталий";
// const email = "pochta@yandex.ru";

function Register({ loggedIn, onRegister }) {

    const [userData, setUserData] = useState(null);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (userData) {
            let { name, email, password } = userData;
            onRegister({ name, email, password });
            console.log(userData);
        }
        if (loggedIn) {
            return <Redirect to="/movies" />
        }
    }


    return (
        <section className="register">

            <img
                className="register__logo"
                src={logo}
                alt="Логотип проекта movie-explorer"
            />
            <h2 className="register__greeteng greeting">Добро пожаловать!</h2>
            <form
                className="register__form"
                onSubmit={handleSubmit}
                name="register__form"
                noValidate=""
                >
                <label className="register__info">Имя
                    <input
                        onChange={handleChange}
                        className="register__info register__input"
                        id="name-input"
                        type="text"
                        name="name"
                        defaultValue={userData?.name}
                        required=""
                        >                            
                        </input>
                    <span id="name-input-error" className="name-input-error form__input-error"></span>
                </label>
                <label className="register__info">E-mail
                    <input
                        onChange={handleChange}
                        className="register__info register__input"
                        id="email-input"
                        type="text"
                        name="email"
                        defaultValue={userData?.email}
                        required="">
                    </input>
                    <span id="email-input-error" className="email-input-error form__input-error"></span>
                </label>
                <label className="register__info">Пароль
                    <input
                        onChange={handleChange}
                        className="register__info register__input register__input-error"
                        id="password-input"
                        type="password"
                        name="password"
                        defaultValue={userData?.password}>
                    </input>
                    <span id="password-input-error" className="password-input-error form__input-error">Что-то пошло не так...</span>
                </label>
            
            <button className="register__button" type="submit" aria-label="save">Зарегистрироваться</button>
            </form>
            <div className="register__container">
                <p className="register__question">Уже зарегистрированы?</p>
                <Link to="/signin" className="register__signin-link">Войти
                </Link>
            </div>
        </section>
    );

}

export default Register;