import './NavTab.css'

function NavTab() {
    return (
        <section className="menu">
            <div className="menu__container">
                <a href="#about-project" className="menu__link">О проекте</a>
                <a href="#techs" className="menu__link">Технологии</a>
                <a href="#about-me" className="menu__link">Студент</a>
            </div>
        </section>
    );
}

export default NavTab;