import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({
    savedMovies,
    onCardClick,
    onCardDeleteClick,
    handleBurgerOpen,
    // checked,
    // setChecked,
    // changeCheckbox,
    itemsToShow,
    showMore,
    searchResults,
    setSearchResults
}) {

    const [value, setValue] = useState('');
    const [error, setError] = useState(null);
    const [emptyField, setEmptyField] = useState(false);
    const [checked, setChecked] = useState((localStorage.getItem('checkboxSavedMovies') === 'true'));


    const filtermoviesdur = searchResults?.filter(movie => {
        return movie?.duration < 40
    });

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
            const filterMovies = savedMovies?.filter(movie => {
                return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
            });
            setSearchResults(filterMovies);
        }
    }

    const changeCheckbox = () => {
        setChecked(!checked);
        localStorage.setItem('checkboxSavedMovies', !checked);
    }

    useEffect(() => {
        setSearchResults(savedMovies);
    }, []);

    return (
        <div className="movies saved-movies">
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
                {filtermoviesdur?.length !== 0 || searchResults?.length !== 0 ? (
                    <>
                        <MoviesCardList
                            savedMovies={checked ? filtermoviesdur : searchResults}
                            onCardClick={onCardClick}
                            onCardDeleteClick={onCardDeleteClick}
                            itemsToShow={itemsToShow}
                        />
                        {!checked && searchResults?.length >= itemsToShow &&
                            <button
                                className='movies__more-button'
                                type="submit"
                                onClick={showMore}>Ещё</button>
                        }
                        {checked && filtermoviesdur?.length >= itemsToShow &&
                            <button
                                className='movies__more-button'
                                type="submit"
                                onClick={showMore}>Ещё</button>}                        </>
                ) : (
                    <p className='movies_nothing-found'>Ничего не найдено...</p>
                )}
            </main>
            <Footer />
        </div>
    );
}

export default SavedMovies;