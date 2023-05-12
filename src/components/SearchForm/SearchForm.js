import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onChange, onSubmit, value, moviesArray }) {

    // const [value, setValue] = useState('');
    // const [fillValue, setfillValue] = useState(false);
    // const [error, setError] = useState("Нужно ввести ключевое слово");

    // const handleChange = (e) => {
    //     setValue(e.target.value);

    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setValue(value);
    //     localStorage.setItem('keyword', value);
    // }

    // let filterMoviesDur = moviesArray?.filter(movie => {
    //         return movie?.duration < 40})


    return (
        <section className="search-form">
            
            <form className="search-form__form"
             onSubmit={onSubmit}
             noValidate=" ">
                
                <div className="search-form__search-icon"></div>
                <div className="search-form__input-container">
                    <div>
                    {/* {(fillValue && error) && <span className="search-form__error form__input-error">{error}</span>} */}
                    <input className="search-form__input" 
                        placeholder='Фильм'
                        onChange={onChange}
                        value={value}
                        required
                         />
                    </div>
                    <button className="search-form__button" type='submit'>Найти</button>
                </div>
                <FilterCheckbox
                moviesArray={moviesArray}/>
            </form>

                        
            <hr className="search-form__border border"></hr>
        </section>
    );
}

export default SearchForm;