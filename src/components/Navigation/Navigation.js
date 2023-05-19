import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ active, setActive}) {

  const handleCloseMenu = () => {
    setActive(false)
  }

    return (
        <nav className=
        {`navigation ${active ? 'navigation_active' : ''}`}
        onClick={handleCloseMenu}
        >

          <button className="navigation__close-icon" onClick={handleCloseMenu} ></button>

            <div className="navigation__link-container">
            <NavLink
                exact to="/"
                className="navigation__link navigation__link-main"
                activeClassName="navigation__link_active"
                >
                Главная
              </NavLink>
            <NavLink
                to="/movies"
                className="navigation__link"
                activeClassName="navigation__link_active"
                >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className="navigation__link"
                activeClassName="navigation__link_active"
                >
                Сохранённые фильмы
              </NavLink>
              </div>
              <div className="navigation__akk-container">
              <NavLink
                to="/profile"
                className="navigation__link navigation__link-profile"
                >
                Аккаунт                
              </NavLink>
              <div className="navigation__akk-icon"></div>
              </div>
        </nav>
    );
}

export default Navigation;