import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({
    moviesCards,
    onCardClick,
    onCardSave,
    onCardDeleteSave,
    savedMovies,
    handleBurgerOpen,
    checked,
    changeCheckbox,
    setChecked,
    itemsToShow,
    showMore
}) {

    const [value, setValue] = useState(localStorage.getItem('keyword') || '');
    const [error, setError] = useState("Нужно ввести ключевое слово");

    const filterMovies = moviesCards?.filter(movie => {
        return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
    })

    const filtermoviesdur = filterMovies?.filter(movie => {
        return movie?.duration < 40
    })

    const handleChangeFilterMovies = (e) => {
        setValue(e.target.value);
        if (e.target.value) {
            setError(null)
        } else
            setError('Нужно ввести ключевое слово');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(value);
        setChecked(checked);
        localStorage.setItem('keyword', value);
        localStorage.setItem('checkbox', checked);
    }

    return (
        <div className="movies">
            <Header className="header movies__header"
                handleBurgerOpen={handleBurgerOpen} />
            <main>
                <SearchForm
                    onChange={handleChangeFilterMovies}
                    onSubmit={handleSubmit}
                    value={value}
                    filtermoviesdur={filtermoviesdur}
                    checked={checked}
                    onChangeCheckbox={changeCheckbox}
                    error={error}
                    setError={setError}
                />
                {value && filterMovies.length !== 0 && filtermoviesdur.length !== 0 ? (
                    <>
                        <MoviesCardList isSavedMovies={false}
                            moviesCards={checked ? filtermoviesdur : filterMovies}
                            savedMovies={savedMovies}
                            onCardClick={onCardClick}
                            onCardSave={onCardSave}
                            onCardDeleteSave={onCardDeleteSave}
                            itemsToShow={itemsToShow}
                        />
                        <button
                            className={`movies__more-button ${((filterMovies || filtermoviesdur).length <= itemsToShow) ? 'movies__more-button_disabled' : ''} `}
                            type="submit"
                            onClick={showMore}>Ещё</button>
                    </>
                ) : (
                    <p className='movies_nothing-found'>Ничего не найдено...</p>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default Movies;