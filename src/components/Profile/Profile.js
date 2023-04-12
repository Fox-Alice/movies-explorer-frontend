import './Profile.css';
import logo from '../../images/header__logo.svg';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

const name = " Виталий";
const email = "pochta@yandex.ru";

function Profile() {

    return (
        <main className="profile">
        <Header header="header movies__header"/>
        <h2 className="profile__greeting greeting">Привет,{name}!</h2>
        <form className="profile__form">
      <label className="profile__info">Имя
        <input className="profile__info profile__input" type="text" name="name" defaultValue={name}></input>
        </label>        
        <hr className="profile__border border"></hr>
        <label className="profile__info">E-mail
        <input className="profile__info profile__input" type="text" name="email" defaultValue={email}></input>
        </label>
        </form>
        <button className="profile__button" >Редактировать</button>
        <button className="profile__button profile__button-logout" >Выйти из аккаунта</button>

        </main>
    );

}

export default Profile;