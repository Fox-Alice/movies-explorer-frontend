import { useContext, useState, useEffect, Redirect } from 'react';
import useForm from '../../utils/useForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css';
import Header from '../Header/Header';

function Profile({onUpdateUser, onLogout}) {

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);

  const [name, setName] = useState('');
  const [about, setEmail] = useState('');

  const {values, handleChange, errors, isValid, resetForm} = useForm();

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
  // if (!errors) {
  //   return <Redirect to="movies"/>
  // }
}



  return (
    <>
    { !errors ? (<Redirect to="movies"/>) : (
    <section className="profile">
      <Header className="header movies__header" />
      <h2 className="profile__greeting greeting">Привет, {currentUser?.name}!</h2>
      <form className="profile__form"
        onSubmit={handleSubmit}
        name="profile__form"
        noValidate="">
        <label className="profile__info">Имя
          <input
            onChange={(e) => handleChange(e)}
            className={`profile__info profile__input ${ errors.name ? "form__input-error" : ""}`}
            type="text"
            name="name"
            defaultValue={currentUser?.name}
            minLength={3}
            required="Поле обязательно к заполнению">              
          </input>
          </label>
          { !isValid.name  &&
          <span id="name-input-error" className="name-input-error form__input-error">{errors.name }</span>}
        <hr className="profile__border border"></hr>
        <label className="profile__info">E-mail
          <input
            onChange={(e) => handleChange(e)}
            className={`profile__info profile__input ${ errors?.email ? "form__input-error" : ""}`}
            type="text"
            name="email"
            defaultValue={currentUser?.email}
            required="Поле обязательно к заполнению">
            </input>
        </label>
        { !isValid.email &&
          <span id="email-input-error" className="email-input-error form__input-error">{errors.email}</span>}
      <button disabled={errors.password || errors.email }
        className={`profile__button ${errors.password || errors.email ? '' : 'register__button'} `}
        type="submit"
        aria-label="save">{errors.email || errors.password ? 'Редактировать' : 'Сохранить'}
      </button>
      </form>
      <button className="profile__button profile__button-logout"
        onClick={onLogout} >Выйти из аккаунта</button>
    </section>
    )}
    </>
  );
}

export default Profile;