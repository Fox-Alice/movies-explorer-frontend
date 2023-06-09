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
    checked,
    setChecked,
    changeCheckbox,
    itemsToShow,
    showMore,
    setSavedMovies
}) {

    const [value, setValue] = useState('');
    const [error, setError] = useState(null);
    const [emptyField, setEmptyField] = useState(false);
    // const [formKey, setFormKey] = useState(10);
    const [searchResults, setSearchResults] = useState(savedMovies);

    const filtermoviesdur = savedMovies?.filter(movie => {
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
            setChecked(checked);
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            let filterMovies = savedMovies?.filter(movie => {
                return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
            });
            setSavedMovies(filterMovies);
            localStorage.setItem('checkbox', checked);
            // setEmptyField(true);
            console.log(emptyField);
        }        
    }

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
                {!emptyField || filtermoviesdur.length !== 0 || savedMovies?.length !== 0 ? (
                    <>
                        <MoviesCardList
                            savedMovies={checked ? filtermoviesdur : savedMovies}
                            onCardClick={onCardClick}
                            onCardDeleteClick={onCardDeleteClick}
                            itemsToShow={itemsToShow}
                        />
                        {!checked && savedMovies?.length >= itemsToShow &&
                            <button
                                className='movies__more-button'
                                type="submit"
                                onClick={showMore}>Ещё</button>
                        }
                        {checked && filtermoviesdur.length >= itemsToShow &&
                            <button
                                className='movies__more-button'
                                type="submit"
                                onClick={showMore}>Ещё</button>}                        </>
                ) : (
                    <p className='movies_nothing-found'>Ничего не найдено...</p>
                )}
                {emptyField &&
                    <>
                        <MoviesCardList
                            savedMovies={() => setSavedMovies(JSON.parse(localStorage.getItem('saved-movies')) || [])}
                            onCardClick={onCardClick}
                            onCardDeleteClick={onCardDeleteClick}
                            itemsToShow={itemsToShow}
                        />
                        {!checked && savedMovies?.length >= itemsToShow &&
                            <button
                                className='movies__more-button'
                                type="submit"
                                onClick={showMore}>Ещё</button>
                        }
                        {checked && filtermoviesdur.length >= itemsToShow &&
                            <button
                                className='movies__more-button'
                                type="submit"
                                onClick={showMore}>Ещё</button>}                        </>
                }
            </main>
            <Footer />
        </div>
    );
}

export default SavedMovies;