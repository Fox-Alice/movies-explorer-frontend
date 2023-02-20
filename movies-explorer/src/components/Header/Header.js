import logo from '../../images/header__logo.svg';
import { Link, Route, Switch } from 'react-router-dom';
import './Header.css'

function Header(
    // { loggedIn, onLogout, email }
    ) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип проекта movie-explorer"
      />
      <Switch>
        {/* <Route path="/signin">
          <Link to="/signup" className="header__signup-link">Регистрация</Link>
        </Route>
        <Route path="/signup">
          <Link to="/signin" className="header__signup-link">Войти</Link>
        </Route> */}
        <Route path="/">
          {/* {loggedIn && */}
            <div>
              {/* <p className='header__user'>{email}</p> */}
              <Link
                to="/signup"
                className="header__signup-link"
                // onClick={onLogout}
                >
                Регистрация
              </Link>
              <button
                        className="header__button"
                        aria-label="save"
                        type="submit"
                    >
                        {/* {buttonText} */}
                        <Link
                to="/signin"
                className="header__signin-link"
                // onClick={onLogout}
                >
                Войти
              </Link>
                    </button>
            </div>
          {/* } */}
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
