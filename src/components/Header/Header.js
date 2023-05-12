import logo from '../../images/header__logo.svg';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ className }
) {
  let location = useLocation();
  const page = location.pathname;

  return (
    <header className={className}>
      {page === "/" ? (
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
          <nav className="header__burger-button">
          </nav>
          <Navigation />
        </>
      )}
    </header>
  );
}

export default Header;
