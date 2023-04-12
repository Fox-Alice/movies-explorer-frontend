import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies() {
    return (
        <main className="movies">
              <Header header="header movies__header"/>
        <SearchForm/>
        <MoviesCardList isSavedMovies= {false} />
        <button className="movies__more-button" type="submit">Ещё</button>
        <Footer/>
        </main>
    );
}

export default Movies;