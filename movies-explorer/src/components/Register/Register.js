import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/header__logo.svg';

const name = " Виталий";
const email = "pochta@yandex.ru";

function Register() {

    return (
        <main className="register">

            <img
                className="register__logo"
                src={logo}
                alt="Логотип проекта movie-explorer"
            />
            <h2 className="register__greeteng greeting">Добро пожаловать!</h2>
            <form className="register__form">
                <label className="register__info">Имя
                    <input className="register__info register__input" id="name-input" type="text" name="name" defaultValue={name}></input>
                    <span id="name-input-error" className="name-input-error form__input-error"></span>
                </label>
                <label className="register__info">E-mail
                    <input className="register__info register__input" id="email-input" type="text" name="email" defaultValue={email}></input>
                    <span id="email-input-error" className="email-input-error form__input-error"></span>
                </label>
                <label className="register__info">Пароль
                    <input className="register__info register__input register__input-error" id="password-input" type="password" name="password" defaultValue={email}></input>
                    <span id="password-input-error" className="password-input-error form__input-error">Что-то пошло не так...</span>
                </label>
            </form>
            <button className="register__button" type="submit" >Зарегистрироваться</button>
            <div className="register__container">
                <p className="register__question">Уже зарегистрированы?</p>
                <Link to="/signin" className="register__signin-link">Войти
                </Link>
            </div>
        </main>
    );

}

export default Register;