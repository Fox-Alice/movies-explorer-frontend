import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/header__logo.svg';

const email = "pochta@yandex.ru";

function Login() {

    return (
        <main className="login register">
            <img
                className="register__logo login__logo"
                src={logo}
                alt="Логотип проекта movie-explorer"
            />
            <h2 className="register__greeteng greeting">Рады видеть!</h2>
            <form className="register__form">
                <label className="register__info">E-mail
                    <input className="register__info register__input login__input" id="email-input" type="text" name="email" defaultValue={email}></input>
                    <span id="email-input-error" className="email-input-error form__input-error"></span>
                </label>
                <label className="register__info">Пароль
                    <input className="register__info register__input" id="password-input" type="password" name="password"></input>
                    <span id="password-input-error" className="password-input-error form__input-error"></span>
                </label>
            </form>
            <button className="register__button login__button" type="submit" >Войти</button>
            <div className="register__container">
                <p className="register__question">Еще не зарегистрированы?</p>
                <Link to="/signup" className="register__signin-link">Регистрация
                </Link>
            </div>
        </main>
    );

}

export default Login;