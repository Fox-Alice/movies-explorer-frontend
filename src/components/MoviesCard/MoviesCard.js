import './MoviesCard.css';

function MoviesCard({ image, active }) {
    return (
        <main className="movies-card">
            <img className="movies-card__image" src={image} alt="Постер фильма"/>
            <div className="movies-card__container">
            <h2 className="movies-card__name">33 слова о дизайне</h2>
            {/* <img className="movies-card__save-icon" src={saveIcon} alt="save icon"/> */}
            <div className={active}></div>
            </div>
            <p className="movies-card__duration">1ч42м</p>
        </main>
    );
}

export default MoviesCard;