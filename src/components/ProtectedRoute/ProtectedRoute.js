import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ path, loggedIn, children, ...props }) {
    return (
        <Route path={ path }>
            { !loggedIn && <Redirect to="/"/> }
            { children }
        </Route>
    );
}

export default ProtectedRoute;
