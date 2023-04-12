import './AboutProject.css'
function AboutProject(){
    return (
        <main className="about-project block">
            <h2 id="about-project" className="about-project__title title">О проекте</h2>
            <hr className="about-project__border border"></hr>
            <div className='about-project__grid-container'>
            <h3 className="about-project__subtitle subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__content content">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <h3 className="about-project__subtitle subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__content content">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="about-project__time-container">
                <p className="about-project__time">1 неделя</p>
                <p className="about-project__time">4 недели</p>                
            </div>
            <div className="about-project__time-container">
                <p className="about-project__develop">Back-end</p>
                <p className="about-project__develop">Front-end</p>
            </div>

        </main>
        );
    }
    
    export default AboutProject;