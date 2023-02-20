import { Link } from 'react-router-dom';
import './NavTab.css'

function NavTab(){
    return (
        <section className="menu">
            <div className="menu__container">
            <Link
                to="/"
                className="menu__link"
                // onClick={onLogout}
                >
                О проекте
              </Link>
              <Link
                to="/"
                className="menu__link"
                // onClick={onLogout}
                >
                Технологии
              </Link>
              <Link
                to="/profile"
                className="menu__link"
                // onClick={onLogout}
                >
                Студент
              </Link>
              </div>
        </section>
        );
    }
    
    export default NavTab;