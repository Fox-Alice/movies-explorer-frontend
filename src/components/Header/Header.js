import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/header__logo.svg';
import './Header.css';

function Header({ className, loggedIn }
) {
  let location = useLocation();
  const page = location.pathname;

  const [navigationActive, setNavigationActive] = useState(false);

  const handleBurgerOpen = () => {
    setNavigationActive(!navigationActive);
    console.log(navigationActive);
  }

  return (
    <header className={className}>
      {page === "/" && !loggedIn ? (
        <>
          <img className="header__logo" src={logo} alt="Логотип проекта movie-explorer" />
          <Switch>
            <Route path="/">
              <div className="header__link-container">
                <Link to="/signup" className="header__signup-link" >Регистрация</Link>
                <Link to="/signin" className="header__signin-link" >
                  <div className="header__button" >Войти</div>
                </Link>
              </div>
            </Route>
          </Switch>
        </>
      ) : (
        <>
          <Link to="/" className="header__link" >
            <img className="header__logo" src={logo} alt="Логотип проекта movie-explorer" />
          </Link>
          <nav className="header__burger-button"
            id="burger"
            onClick={handleBurgerOpen}>
          </nav>
          <Navigation
            active={navigationActive}
            setActive={setNavigationActive} />
        </>
      )}
    </header>
  );
}

export default Header;
