import './Techs.css'
function Techs() {
    return (
        <section className="techs block">
            <h2 id="techs" className="techs__title title">Teхнологии</h2>
            <hr className="techs__border border"></hr>
            <h3 className="techs__subtitle ">7 технологий</h3>
            <p className="techs__content content">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__container">
                <li className="techs__item">HTML</li>
                <li className="techs__item">CSS</li>
                <li className="techs__item">JS</li>
                <li className="techs__item">React</li>
                <li className="techs__item">Git</li>
                <li className="techs__item">Express.js</li>
                <li className="techs__item">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;