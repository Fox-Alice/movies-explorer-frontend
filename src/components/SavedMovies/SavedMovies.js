import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ savedMovies, onCardClick, onCardDeleteClick }) {
    
    const [value, setValue] = useState('');


    const filterMovies = savedMovies?.filter(movie => {
        return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
      })

      const handleChangeFilterMovies = (e) => {
        setValue(e.target.value);
    } 

        const handleSubmit = (e) => {
        e.preventDefault();
        setValue(value);
    }


    return (
        <div className="movies saved-movies">
            <Header className="header movies__header" />
            <main>
                <SearchForm
                onChange={handleChangeFilterMovies}
                onSubmit={handleSubmit}
                value={value} />
            {filterMovies !== null ? (
                <>
                <MoviesCardList 
                savedMovies={filterMovies}
                onCardClick={onCardClick}
                onCardDeleteClick={onCardDeleteClick}
                onChange={handleChangeFilterMovies}
                 />
                 </>
                 ) : (
                    <p className='movies_nothing-found'>Ничего не найдено...</p>
                    
                    )}
            </main>
            <Footer />
        </div>
    );
}

export default SavedMovies;