import './MoviesCard.css';

function MoviesCard({ image, active }) {
    return (
        <section className="movies-card">
            <img className="movies-card__image" src={image} alt="Постер фильма" />
            <div className="movies-card__container">
                <h2 className="movies-card__name">33 слова о дизайне</h2>
                <button className={active}></button>
            </div>
            <p className="movies-card__duration">1ч42м</p>
        </section>
    );
}

export default MoviesCard;