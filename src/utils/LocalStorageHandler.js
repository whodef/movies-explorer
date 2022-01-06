class LocalStorageHandler {
    save = (key, value) => localStorage.setItem(`${key}`, JSON.stringify(value));
    get = (key) => JSON.parse(localStorage.getItem(key));
    has = (key) => null !== localStorage.getItem(key);
    clear = (keys) => keys.forEach((key) => localStorage.removeItem(key));
    flushAll = () => localStorage.clear();
}

const localStorageHandler = new LocalStorageHandler();

export default localStorageHandler;
