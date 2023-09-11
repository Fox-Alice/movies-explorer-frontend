import './AboutMe.css';
import image from '../../images/about-me__image.jpg'
function AboutMe() {
    return (
        <section className="about-me block">
            <h2 id="about-me" className="about-me__title title">Студент</h2>
            <hr className="about-me__border border"></hr>
            <div className='about-me__container'>
                <img className="about-me__image" src={image} alt={"avatar"} />
                <div className='about-me__content-container'>
                    <h3 className="about-me__subtitle">Эльвира</h3>
                    <p className="about-me__description">Фронтенд-разработчик</p>
                    <p className="about-me__content content">Я живу в Костроме, закончила институт экономики, управления и финансов КГТУ по специальности "финансы и кредит".
                     У меня есть муж и сын. Я люблю играть в квизы, а ещё увлекаюсь волейболом. Недавно начала кодить. В 2023 году закончила курс "веб-разработчик" от Яндекс Практикума</p>
                    <a className="about-me__github-link" href="https://github.com/Fox-Alice" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;