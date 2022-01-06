class JwtHandler {
    getToken = () => localStorage.getItem('jwt');
    setToken = ( value) => localStorage.setItem('jwt', value);
    hasToken = () => null !== localStorage.getItem('jwt');
    clearToken = () => localStorage.removeItem('jwt');
}

const jwtHandler = new JwtHandler();

export default jwtHandler;
