import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <div className="movies saved-movies">
            <Header header="header movies__header" />
            <main>
                <SearchForm />
                <MoviesCardList isSavedMovies={true} />
            </main>
            <Footer />
        </div>
    );
}

export default SavedMovies;