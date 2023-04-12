import './Portfolio.css';

function Portfolio() {
    return (
        <main className="portfolio block">
            <h4 className="portfolio__title">Портфолио</h4>
            <a className="portfolio__link" href="https://github.com/Fox-Alice/how-to-learn">
                <div className="portfolio__string">
                    <p className="portfolio__name">Статичный сайт</p>
                    <p className="portfolio__name">↗</p>
                </div> </a>
                <hr className="portfolio__border"></hr>
            <a className="portfolio__link" href="https://github.com/Fox-Alice/russian-travel">
                <div className="portfolio__string">
                    <p className="portfolio__name">Адаптивный сайт</p>
                    <p className="portfolio__name">↗</p>
                </div> </a>
                <hr className="portfolio__border"></hr>
                <a className="portfolio__link" href="https://fox-alice.github.io/mesto/">
                <div className="portfolio__string">
                    <p className="portfolio__name">Одностраничное приложение</p>
                    <p className="portfolio__name">↗</p>
                </div> </a>
        </main>
    );
}

export default Portfolio;