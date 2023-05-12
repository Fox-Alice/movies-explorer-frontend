import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
// import { Favourite } from '../Favorite/Favorite';
// import { useState } from 'react';
// import { CurrentCardContext } from '../../contexts/CurrentCardContext';
// import useLocalStorage from "react-use-localstorage";
// import { useRef } from "react"; 





function MoviesCard({ item, onCardClick, onCardSave, onCardDeleteClick, savedMovies }) {

    // const [isSaved, setIsSaved] = useState(false);
    // const currentCard = useContext(CurrentCardContext);
    // item => item?.movieId === data?.id

    // const isSaved = savedMovies?.find(movie => movie?.movieId === item?.id);

    let location = useLocation();
    const page = location.pathname;

    const isSaved = savedMovies?.some((movie) => movie?.movieId === item.id);

    // const cardSaveButtonClassName = (
    //     `movies-card__save-icon ${isSaved ? "movies-card__save-icon_active" : " "}`
    // );

    

    // function handleClick() {
    //     onCardClick(item);
        
    // }

    function handleSaveClick() {
        onCardSave(item);
        console.log(isSaved);
    }

    function handleDeleteClick() {
        onCardDeleteClick(item);
    }

    

    return (
        <section className="movies-card">
            <a className='movies-card__image-link' href={item?.trailerLink} target="_blank" rel="noreferrer">
            <img className="movies-card__image"
            // onClick={handleClick}
            src={page === "/saved-movies" ? item?.image : `https://api.nomoreparties.co${item?.image.url}`}
            alt={item?.nameRU} />
            </a>
            <div className="movies-card__container">
                <h2 className="movies-card__name">{item?.nameRU}</h2>
                {page === "/movies" ? (
                    <button className={ isSaved ? "movies-card__save-icon_active" : "movies-card__save-icon"}                
                            onClick={ handleSaveClick}>
                    </button>
                ) : (
                <button className="movies-card__remove-icon"                
                        onClick={ handleDeleteClick}>
                </button>
                )}            
            </div>
            <p className="movies-card__duration">{item?.duration}</p>
        </section>
    );
}

export default MoviesCard;