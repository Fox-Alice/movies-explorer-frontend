import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio block">
            <h4 className="portfolio__title">Портфолио</h4>
            <li className="portfolio__list">
                <a className="portfolio__link" href="https://fox-alice.github.io/how-to-learn/" target="_blank" rel="noreferrer">
                    <div className="portfolio__string">
                        <p className="portfolio__name">Статичный сайт</p>
                        <p className="portfolio__name">↗</p>
                    </div> </a></li>
            <hr className="portfolio__border"></hr>
            <li className="portfolio__list">
                <a className="portfolio__link" href="https://fox-alice.github.io/russian-travel/" target="_blank" rel="noreferrer">
                    <div className="portfolio__string">
                        <p className="portfolio__name">Адаптивный сайт</p>
                        <p className="portfolio__name">↗</p>
                    </div> </a></li>
            <hr className="portfolio__border"></hr>
            <li className="portfolio__list">
                <a className="portfolio__link" href="https://fox-alice.github.io/mesto/" target="_blank" rel="noreferrer">
                    <div className="portfolio__string">
                        <p className="portfolio__name">Одностраничное приложение</p>
                        <p className="portfolio__name">↗</p>
                    </div> </a></li>
        </section>
    );
}

export default Portfolio;