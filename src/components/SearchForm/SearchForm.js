import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
    onChange,
    onSubmit,
    value,
    filtermoviesdur,
    onChangeCheckbox,
    checked,
    error,
    setError,
}) {

    const [fillValue, setfillValue] = useState(false);

    const handleBlur = () => {
        setfillValue(true)
    }

    return (
        <section className="search-form">
            <form className="search-form__form"
                onSubmit={onSubmit}
                noValidate=" ">
                <div className="search-form__search-icon"></div>
                <div className="search-form__input-container">
                    <div>
                        {(fillValue && error) && <span className="search-form__error form__input-error">{error}</span>}
                        <input className="search-form__input"
                            placeholder='Фильм'
                            onBlur={handleBlur}
                            onChange={onChange}
                            value={value}
                            required
                        />
                    </div>
                    <button disabled={error} className="search-form__button" type='submit'>Найти</button>
                </div>
                <FilterCheckbox
                    filtermoviesdur={filtermoviesdur}
                    onChangeCheckbox={onChangeCheckbox}
                    checked={checked} />
            </form>
            <hr className="search-form__border border"></hr>
        </section>
    );
}

export default SearchForm;