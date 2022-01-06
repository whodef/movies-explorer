function FilterCheckbox({ onClick, value }) {

    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__label" htmlFor="filter-checkbox">
                <input
                    className="filter-checkbox__checkbox-invisible"
                    id="filter-checkbox"
                    type="checkbox"
                    onChange={ onClick }
                    checked={ value }
                />
                <div className="filter-checkbox__button"/>
            </label>
            <p className="filter-checkbox__caption">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;
