import React, { useState } from 'react';

function FilterCheckbox({ moviesArray }) {

    const [checked, setChecked] = useState(false);

    const changeCheckbox = () => {
        setChecked(!checked);
        }

    return (
        <label className="search-form__styling-checkbox">
            <input
                type="checkbox"
                className="search-form__invisible-checkbox"
                checked={checked}
                onClick={changeCheckbox}></input>
            <span className="search-form__visible-checkbox"></span>
            Короткометражки
        </label>
    );
}

export default FilterCheckbox;

