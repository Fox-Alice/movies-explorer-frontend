import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ item, onCardClick, onCardSave, onCardDeleteClick, savedMovies }) {

    let location = useLocation();
    const page = location.pathname;

    const isSaved = savedMovies?.some((movie) => movie?.movieId === item.id);

    function handleSaveClick() {
        onCardSave(item);
    }

    function handleDeleteClick() {
        onCardDeleteClick(item);
    }

    return (
        <section className="movies-card">
            <a className='movies-card__image-link' href={item?.trailerLink} target="_blank" rel="noreferrer">
                <img className="movies-card__image"
                    src={page === "/saved-movies" ? item?.image : `https://api.nomoreparties.co${item?.image.url}`}
                    alt={item?.nameRU} />
            </a>
            <div className="movies-card__container">
                <h2 className="movies-card__name">{item?.nameRU}</h2>
                {page === "/movies" ? (
                    <button className={isSaved ? "movies-card__save-icon_active" : "movies-card__save-icon"}
                        onClick={handleSaveClick}>
                    </button>
                ) : (
                    <button className="movies-card__remove-icon"
                        onClick={() => handleDeleteClick(item)}>
                    </button>
                )}
            </div>
            <p className="movies-card__duration">{`${Math.floor(item?.duration / 60)}ч${item?.duration % 60}м`}</p>
        </section>
    );
}

export default MoviesCard;