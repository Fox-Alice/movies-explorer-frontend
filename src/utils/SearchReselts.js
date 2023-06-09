import MoviesCardList from "../components/MoviesCardList/MoviesCardList";

function SearchResults({
    value,
    checked,
    savedMovies,
    moviesCards,
    onCardClick,
    onCardSave,
    onCardDeleteSave,
    itemsToShow,
    showMore
}) {

    const filterMovies = moviesCards?.filter(movie => {
        return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
    });

    const filtermoviesdur = filterMovies?.filter(movie => {
        return movie?.duration < 40
    })

    return (
        <>
        { value && filterMovies.length !== 0 && filtermoviesdur.length !== 0 ? (
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
            </>
        );
}

export default SearchResults;