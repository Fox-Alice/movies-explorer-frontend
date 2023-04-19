import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import image1 from '../../images/movies-card__image1.png';
import image2 from '../../images/movies-card__image2.png';
import image3 from '../../images/movies-card__image3.png';
import image4 from '../../images/movies-card__image4.png';
import image5 from '../../images/movies-card__image5.png';
import image6 from '../../images/movies-card__image6.png';
import image7 from '../../images/movies-card__image7.png';
import image8 from '../../images/movies-card__image8.png';
import image9 from '../../images/movies-card__image9.png';
import image10 from '../../images/movies-card__image10.png';
import image11 from '../../images/movies-card__image11.png';
import image12 from '../../images/movies-card__image12.png';
import image13 from '../../images/movies-card__image13.png';
import image14 from '../../images/movies-card__image14.png';
import image15 from '../../images/movies-card__image15.png';
import image16 from '../../images/movies-card__image16.png';

function MoviesCardList({ isSavedMovies }) {
    return (
        <section className="movies-card-list">
            {isSavedMovies ? (
                <>
                    <MoviesCard image={image1} active={"movies-card__remove-icon"} />
                    <MoviesCard image={image2} active={"movies-card__remove-icon"} />
                </>
            ) : (
                < >
                    <MoviesCard image={image1} active={"movies-card__save-icon_active"} />
                    <MoviesCard image={image2} active={"movies-card__save-icon"} />
                    <MoviesCard image={image3} active={"movies-card__save-icon_active"} />
                    <MoviesCard image={image4} active={"movies-card__save-icon"} />
                    <MoviesCard image={image5} active={"movies-card__save-icon"} />
                    <MoviesCard image={image6} active={"movies-card__save-icon"} />
                    <MoviesCard image={image7} active={"movies-card__save-icon"} />
                    <MoviesCard image={image8} active={"movies-card__save-icon_active"} />
                    <MoviesCard image={image9} active={"movies-card__save-icon"} />
                    <MoviesCard image={image10} active={"movies-card__save-icon"} />
                    <MoviesCard image={image11} active={"movies-card__save-icon_active"} />
                    <MoviesCard image={image12} active={"movies-card__save-icon"} />
                    <MoviesCard image={image13} active={"movies-card__save-icon_active"} />
                    <MoviesCard image={image14} active={"movies-card__save-icon"} />
                    <MoviesCard image={image15} active={"movies-card__save-icon"} />
                    <MoviesCard image={image16} active={"movies-card__save-icon_active"} /></>
            )}
        </section>
    );
}

export default MoviesCardList;