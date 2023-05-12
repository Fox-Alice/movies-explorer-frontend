import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useCallback, useState } from 'react';
import { useResize } from '../../utils/useResize';



function Movies({ moviesCards, onCardClick, onCardSave, onCardDeleteSave, savedMovies }) {

    const [value, setValue] = useState(localStorage.getItem('keyword'));
    const [itemsToShow, setIemsToShow] = useState(5);
    // const [checked, setChecked] = useState(false);

    // const changeCheckbox = useCallback(() => {
    //    setChecked(!checked);
    // }, [checked])
    const {isScreenMd, isScreenXl} = useResize();


    const filterMovies = moviesCards?.filter(movie => {
        return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
      })

    //   const filterShort = moviesCards?.filter(movie => {
    //     return movie?.duration < 40} )

    // const filterMoviesShort = filterMovies.filter((movie) => { return movie?.duration < 40} )

      const handleChangeFilterMovies = (e) => {
        setValue(e.target.value);
    } 

        const handleSubmit = (e) => {
        e.preventDefault();
        setValue(value);
        // setChecked(checked);
        localStorage.setItem('keyword', value);
        // localStorage.setItem('checkbox', checked);

    }

    // const search = (filterMovies) => {
    //     if (!checked) {
    //         let filterMovies = moviesCards?.filter(movie => {
    //             return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
    //           })
    //     } else {
    //         let filterMovies = (moviesCards?.filter(movie => {
    //             return movie?.nameRU?.toLowerCase().includes(value.toLowerCase())
    //           })).filter((movie) => { return movie?.duration < 40} )
    //     }
    //     return filterMovies;
    // }

    const showMore = () => {
        if (isScreenMd) {
            setIemsToShow(8);            
        }
        if (isScreenXl) {
            setIemsToShow(16);
        }
    }

    return (
        <div className="movies">
            <Header className="header movies__header" />
            <main>
                <SearchForm 
                onChange={handleChangeFilterMovies}
                onSubmit={handleSubmit}
                value={value}
                moviesArray={filterMovies}
                // checked={checked}
                // onCheck={changeCheckbox}
                />
                {value && filterMovies !== null ? (
                    <>
                <MoviesCardList isSavedMovies={false}
                        moviesCards={filterMovies}
                        savedMovies={savedMovies}
                        // isSaved={isSaved}
                        onCardClick={onCardClick}
                        onCardSave={onCardSave}
                        onCardDeleteSave={onCardDeleteSave}
                        />
                        <button className="movies__more-button" type="submit">Ещё</button>
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