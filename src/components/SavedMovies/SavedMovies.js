import { useState } from 'react';
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
    showMore
}) {

    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    const filterMovies = savedMovies?.filter(movie => {
        return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
    });

    const filtermoviesdur = filterMovies?.filter(movie => {
        return movie?.duration < 40
    });

    const handleChangeFilterMovies = (e) => {
        setValue(e.target.value);
        if (e.target.value) {
            setError(null)
        } else {
            setError("Нужно ввести ключевое слово");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value)
            return;
        setValue(value);
        setChecked(checked);
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
                />
                {filterMovies && filtermoviesdur ? (
                    <>
                        <MoviesCardList
                            savedMovies={checked ? filtermoviesdur : filterMovies}
                            onCardClick={onCardClick}
                            onCardDeleteClick={onCardDeleteClick}
                            itemsToShow={itemsToShow}
                        />
                        <button
                            className={`movies__more-button ${((filterMovies || filtermoviesdur).length <= itemsToShow) ? 'movies__more-button_disabled' : ''}`}
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

export default SavedMovies;