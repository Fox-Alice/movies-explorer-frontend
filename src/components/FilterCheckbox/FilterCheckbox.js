import React, { useState } from 'react';

function FilterCheckbox({ checked, onChangeCheckbox, filtermoviesdur }) {

    // const [checked, setChecked] = useState(false);

    // const changeCheckbox = () => {        
    //     setChecked(!checked);
    //     // let filterMoviesDur = moviesArray?.filter(movie => {
    //     //     return movie?.duration < 40});
    //     //     return filterMoviesDur;
    //     }

    return (
        <label className="search-form__styling-checkbox">
            <input
                type="checkbox"
                className="search-form__invisible-checkbox"
                checked={checked}
                onChange={onChangeCheckbox}
                 filtermoviesdur={filtermoviesdur}>                
                </input>
            <span className="search-form__visible-checkbox"></span>
            Короткометражки
        </label>
    );
}

export default FilterCheckbox;

