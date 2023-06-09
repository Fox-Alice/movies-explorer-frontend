import { Link, Redirect } from 'react-router-dom';
import useForm from '../../utils/useForm';
import logo from '../../images/header__logo.svg';
import './Login.css';

function Login({ loggedIn, onLogin, errorMessage }) {

    const { values, handleChange, errors, isValid, resetForm } = useForm();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(values);
        if (!values) {
            return;
        }
        onLogin(values);
        // console.log(loggedIn);
    }

    return (
        <>
            {loggedIn ? (<Redirect to="/movies" />) : (
                <section className="login register">
                    <Link to="/" className="header__link" >
                        <img
                            className="register__logo login__logo"
                            src={logo}
                            alt="Логотип проекта movie-explorer"
                        />
                    </Link>
                    <h2 className="register__greeteng greeting">Рады видеть!</h2>
                    <form
                        className="register__form"
                        name="register__form"
                        onSubmit={handleSubmit}
                        onReset={resetForm}
                        noValidate="">
                        <label className="register__info">E-mail
                            <input
                                className={`register__info register__input login__input ${errors.email ? "form__input-error" : ""}`}
                                id="email-input"
                                type="text"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                defaultValue={values?.email}
                                required=""></input>
                            {!isValid.email &&
                                <span id="email-input-error" className="email-input-error form__input-error">{errors.email}</span>}
                        </label>
                        <label className="register__info">Пароль
                            <input
                                defaultValue={values?.password}
                                onChange={(e) => handleChange(e)}
                                className={`register__info register__input ${errors.password ? "form__input-error" : ""}`}
                                id="password-input"
                                type="password"
                                name="password"
                                required=""></input>
                            {!isValid.password &&
                                <span id="password-input-error" className="password-input-error form__input-error">{errors.password}</span>}
                        </label>
                        {errorMessage &&
                            <span id="register__error" className="register__error form__input-error">{errorMessage}</span>}

                        <button disabled={!values?.email || !values?.password || errors.password || errors.email}
                            className="register__button login__button"
                            type="submit"
                            aria-label="save">
                            Войти
                        </button>
                    </form>
                    <div className="register__container">
                        <p className="register__question">Еще не зарегистрированы?</p>
                        <Link to="/signup" className="register__signin-link">Регистрация
                        </Link>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login;