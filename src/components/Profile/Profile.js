import { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../utils/useForm';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ onUpdateUser, onLogout, errorMessage }) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [about, setEmail] = useState('');

  const { values, handleChange, errors, isValid, resetForm } = useForm();

  useEffect(() => {
    setName(values?.name);
    setEmail(values?.about)
    
  }, [values])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      email: about,
    });
    resetForm();
  }

  return (
    <>
      {!errors ? (<Redirect to="movies" />) : (
        <section className="profile">
          <Header className="header movies__header" />
          <h2 className="profile__greeting greeting">Привет, {currentUser?.name}!</h2>
          <form className="profile__form"
            onSubmit={handleSubmit}
            name="profile__form"
            noValidate="">
            <label className="profile__info">Имя
              <input
                id="edit"
                onChange={(e) => handleChange(e)}
                className={`profile__info profile__input ${errors.name ? "form__input-error" : ""}`}
                type="text"
                name="name"
                defaultValue={currentUser?.name}
                minLength={3}
                required="Поле обязательно к заполнению">
              </input>
            </label>
            {!isValid.name &&
              <span id="name-input-error" className="profile__error name-input-error form__input-error">{errors.name}</span>}
            <hr className="profile__border border"></hr>
            <label className="profile__info">E-mail
              <input
                onChange={(e) => handleChange(e)}
                className={`profile__info profile__input ${errors?.email ? "form__input-error" : ""}`}
                type="text"
                name="email"
                defaultValue={currentUser?.email}
                required="Поле обязательно к заполнению">
              </input>
            </label>
            {!isValid.email &&
              <span id="email-input-error" className="profile__error email-input-error form__input-error">{errors.email}</span>}
                {errorMessage &&
                  <span id="profile__error" className="profile__error register__error form__input-error">{errorMessage}</span>}
            {(!values.name && !values.email) ?
              <a href="#edit" className="profile__button">Редактировать</a> :
              <button disabled={errors.name || errors.email || errorMessage}
                className="profile__save-button register__button"
                type="submit"
                aria-label="save">Сохранить
              </button>}

          </form>
          <button className="profile__button profile__button-logout"
            onClick={onLogout} >Выйти из аккаунта</button>
        </section>
      )}
    </>
  );
}

export default Profile;