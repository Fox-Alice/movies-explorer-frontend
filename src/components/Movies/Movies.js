import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies() {
    return (
        <div className="movies">
            <Header header="header movies__header" />
            <main>
                <SearchForm />
                <MoviesCardList isSavedMovies={false} />
                <button className="movies__more-button" type="submit">Ещё</button>
            </main>
            <Footer />
        </div>
    );
}

export default Movies;