import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';
import { shortFilmsDuration } from '../../utils/constants';

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
    const [error, setError] = useState(null);
    const [emptyField, setEmptyField] = useState(false);
    const [searchResults, setSearchResults] = useState(localStorage.getItem('filtrMovies') ? JSON.parse(localStorage.getItem('filterMovies')) : []);

    const filtermoviesdur = searchResults?.filter(movie => {
        return movie?.duration < shortFilmsDuration
    })

    const handleChangeFilterMovies = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) {
            setEmptyField(true);
            setError('Нужно ввести ключевое слово');
            return
        } else {
            setError(null);
            setValue(value);
            setChecked(checked);
            const filterMovies = moviesCards?.filter(movie => {
                return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
            })
            setSearchResults(filterMovies);
            localStorage.setItem('keyword', value)
            localStorage.setItem('filterMovies', JSON.stringify(filterMovies));
            localStorage.setItem('checkbox', checked);
        }
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
                    emptyField={emptyField}
                />

                {!emptyField || (filtermoviesdur || searchResults).length !== 0 ? (
                    <>
                        <MoviesCardList
                            moviesCards={checked ? filtermoviesdur : searchResults}
                            savedMovies={savedMovies}
                            onCardClick={onCardClick}
                            onCardSave={onCardSave}
                            onCardDeleteSave={onCardDeleteSave}
                            itemsToShow={itemsToShow}
                        /> {!checked && searchResults?.length >= itemsToShow &&
                            <button
                                className='movies__more-button'
                                type="submit"
                                onClick={showMore}>Ещё</button>}
                        {checked && filtermoviesdur?.length >= itemsToShow &&
                            <button
                                className='movies__more-button'
                                type="submit"
                                onClick={showMore}>Ещё</button>}
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