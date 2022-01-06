import { regExp } from '../../utils/constants';

function SearchForm({ children, onSubmit, onChange, value }) {
    const handleChange = (e) => onChange(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div className="search-form">
            <div className="search-form__container">
                <div className="search-form__wrapper">
                    <div className="search-form__icon"/>
                    <form className="search-form__field">
                        <input
                            className="search-form__input"
                            name="searchQuery"
                            type="text"
                            placeholder="Фильмы"
                            required
                            value={ value }
                            onChange={ handleChange }
                            pattern={regExp.search}
                        />
                        <button
                            className="search-form__button app__link"
                            type="submit"
                            onClick={ handleSubmit }
                        >
                            Найти
                        </button>
                    </form>
                    <div className="search-form__checkbox-wrapper">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;
