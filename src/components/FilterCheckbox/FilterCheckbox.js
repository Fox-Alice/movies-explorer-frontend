function FilterCheckbox({ checked, onChangeCheckbox, filtermoviesdur }) {

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

