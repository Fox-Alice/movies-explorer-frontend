import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h4 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <hr className="footer__border"></hr>
            <div className="footer__container">
                <div className="footer__link-container">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
                </div>
                <p className="footer__text">&#64;2023</p>
            </div>
        </footer>
    );
}

export default Footer;