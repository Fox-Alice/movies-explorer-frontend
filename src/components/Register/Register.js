import { Link, Redirect } from 'react-router-dom';
import useForm from '../../utils/useForm';
import { useState } from 'react';
import * as validation from '../../utils/Validation';
import './Register.css';
import logo from '../../images/header__logo.svg';

function Register({ loggedIn, onRegister, errorMessage }) {


    // const formLogin = () => {
    //     // resetForm(values);
    //   }
    const { values, handleChange, errors, isValid, resetForm } = useForm();


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (values) {
            let { name, email, password } = values;
            onRegister({ name, email, password });
            // console.log(values);
        }
    }


    return (
        <>
            {loggedIn ? (<Redirect to="/movies" />) : (
                <section className="register">
                    <Link to="/" className="header__link" >
                        <img
                            className="register__logo"
                            src={logo}
                            alt="Логотип проекта movie-explorer"
                        />
                    </Link>
                    <h2 className="register__greeteng greeting">Добро пожаловать!</h2>
                    <form
                        className="register__form"
                        onSubmit={handleSubmit}
                        onReset={resetForm}
                        name="register__form"
                        noValidate=""
                    >
                        <label className="register__info">Имя
                            <input
                                onChange={(e) => handleChange(e)}
                                className={`register__info register__input ${errors.name ? "form__input-error" : ""}`}
                                id="name-input"
                                type="text"
                                name="name"
                                defaultValue={values.name}
                                minLength={3}
                                required="Поле обязательно к заполнению"
                            >
                            </input>
                            {!isValid.name &&
                                <span id="name-input-error" className="name-input-error form__input-error">{errors.name}</span>}
                        </label>
                        <label className="register__info">E-mail
                            <input
                                onChange={(e) => handleChange(e)}
                                className={`register__info register__input ${errors.email ? "form__input-error" : ""}`}
                                id="email-input"
                                type="text"
                                name="email"
                                defaultValue={values.email}
                                required="Поле обязательно к заполнению">
                            </input>
                            {!isValid.email &&
                                <span id="email-input-error" className="email-input-error form__input-error">{errors.email}</span>}
                        </label>
                        <label className="register__info">Пароль
                            <input
                                onChange={(e) => handleChange(e)}
                                className={`register__info register__input ${errors.password ? "form__input-error" : ""}`}
                                id="password-input"
                                type="password"
                                name="password"
                                defaultValue={values.password}
                                minLength={3}
                                required="Поле обязательно к заполнению"
                            >
                            </input>
                            {!isValid.password &&
                                <span id="password-input-error" className="password-input-error form__input-error">{errors.password}</span>}
                        </label>
                        {errorMessage &&
                            <span id="register__error" className="register__error form__input-error">{errorMessage}</span>}
                        <button disabled={!values?.email || !values?.password || !values?.name || errors.password || errors.email || errors.name} className="register__button" type="submit" aria-label="save">Зарегистрироваться</button>
                    </form>
                    <div className="register__container">
                        <p className="register__question">Уже зарегистрированы?</p>
                        <Link to="/signin" className="register__signin-link">Войти
                        </Link>
                    </div>
                </section>
            )}
        </>
    );
}

export default Register;