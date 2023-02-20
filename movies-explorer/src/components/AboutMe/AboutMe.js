import './AboutMe.css';
import image from '../../images/about-me__image.png'
function AboutMe() {
    return (
        <main className="about-me block">
            <h2 className="about-me__title title">Студент</h2>
            <hr className="about-me__border border"></hr>
            <div className='about-me__container'>
                <img className="about-me__image" src={image} alt={"avatar"} />
                <div className='about-me__content-container'>
                    <h3 className="about-me__subtitle">Виталий</h3>
                    <p className="about-me__description">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__content content">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about-me__github-link" href="https://github.com/Fox-Alice">Github</a>
                </div>
            </div>
        </main>
    );
}

export default AboutMe;