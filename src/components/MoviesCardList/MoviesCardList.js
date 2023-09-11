import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ itemsToShow, moviesCards, onCardClick, onCardSave, onCardDeleteSave, savedMovies, onCardDeleteClick }) {

    let location = useLocation();
    const page = location.pathname;

    return (
        <section className="movies-card-list">
            {page === "/movies" ? (
                <>
                    {moviesCards?.slice(0, itemsToShow).map((item) => (
                        <MoviesCard
                            key={item.id}
                            item={item}
                            country={item.country}
                            director={item.director}
                            duration={item.duration}
                            year={item.year}
                            description={item.description}
                            image={item.image.url}
                            trailerLink={item.trailerLink}
                            thumbnail={item.thumbnail}
                            movieId={item.movieId}
                            nameRU={item.nameRU}
                            nameEN={item.nameEN}
                            savedMovies={savedMovies}
                            onCardClick={onCardClick}
                            onCardSave={onCardSave}
                            onCardDeleteSave={onCardDeleteSave}
                        />
                    ))}
                </>
            ) : (
                <>
                    {savedMovies?.slice(0, itemsToShow).map((item) => (
                        <MoviesCard
                            key={item._id}
                            item={item}
                            country={item.country}
                            director={item.director}
                            duration={item.duration}
                            year={item.year}
                            description={item.description}
                            image={item.image}
                            trailerLink={item.trailerLink}
                            thumbnail={item.thumbnail}
                            movieId={item.movieId}
                            nameRU={item.nameRU}
                            nameEN={item.nameEN}
                            moviesCards={moviesCards}
                            savedMovies={savedMovies}
                            onCardDeleteClick={onCardDeleteClick}
                        />
                    ))}
                </>
            )}
        </section>
    );
}

export default MoviesCardList;