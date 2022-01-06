export const regExp = {
    name: '^[a-zA-Zа-яА-ЯЁё\\s\\-]+$',
    email: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
    password: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$',
    search: '^(\\p{Letter}|\\p{Separator}|\\p{N}|\\p{Punctuation})+$',
};

export const windowSizes = {
    desktop: 1280,
    tablet: 780,
    mobile: 320,
};

export const cardsNumbers = {
    desktop: 12,
    tablet: 8,
    mobile: 5,
};

export const nextCardsNumbers = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
};

export const MOVIE_API_URL = 'https://api.nomoreparties.co';

export const OWN_API_URL = 'https://api-movie.things.tools';

export const userValidationMessage = 'Пароль должен содержать не менее шести символов, хотя бы одну цифру, а также строчные и прописные буквы';
