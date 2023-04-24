import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__form">
                <div className="search-form__search-icon"></div>
                <div className="search-form__input-container">
                    <input className="search-form__input" placeholder='Фильм' required />
                    <button className="search-form__button" type='submit'>Найти</button>
                </div>
                <label className="search-form__styling-checkbox">
                    <input type="checkbox" class="search-form__invisible-checkbox"></input>
                    <span class="search-form__visible-checkbox"></span>
                    Короткометражки
                </label>
            </form>
            <hr className="search-form__border border"></hr>
        </section>
    );
}

export default SearchForm;