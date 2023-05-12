import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';


function MoviesCardList({ moviesCards, onCardClick, onCardSave, onCardDeleteSave, savedMovies, onCardDeleteClick }) {

    let location = useLocation();
    const page = location.pathname;
    
    
    return (
        <section className="movies-card-list">
            {page === "/movies" ? (
                <>
            {moviesCards.map((item) => (
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
                        // isSaved={isSaved}                   
                        onCardClick={onCardClick}
                        onCardSave={onCardSave}
                        onCardDeleteSave={onCardDeleteSave}
                    />
                ))} 
                </>
                ) : (
                    <>
            {savedMovies.map((item) => (
                    <MoviesCard
                        key={item.id}
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
                        savedMovies={savedMovies}
                        // isSaved={isSaved}                   
                        // onCardClick={onCardClick}
                        // onCardSave={onCardSave}
                        onCardDeleteClick={onCardDeleteClick}
                    />
                ))} 
                </>
                )}
        </section>
    );
}

export default MoviesCardList;