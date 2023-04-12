import logo from '../../images/header__logo.svg';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header ({header}
  // { loggedIn, onLogout, email }
) {
  let location = useLocation();
  const page = location.pathname;  

  return (
    <header className={header}>
      {page === "/" ? (
        <>
        <img
        className="header__logo"
        src={logo}
        alt="Логотип проекта movie-explorer"
      />
        <Switch>
          <Route path="/">
            <div>
              <Link
                to="/signup"
                className="header__signup-link"
              >
                Регистрация
              </Link>
              <button
                className="header__button"
                aria-label="save"
                type="submit"
              >
                <Link
                  to="/signin"
                  className="header__signin-link"
                >Войти
                </Link>
              </button>
            </div>
          </Route>
        </Switch>
        </>    
        ) : (
          <>
       <img
        className="header__logo"
        src={logo}
        alt="Логотип проекта movie-explorer"
      />
            <nav className="header__burger-button">                
            </nav>
            <Navigation />
            </>
        )}
        </header>
  ); 
}

export default Header;
