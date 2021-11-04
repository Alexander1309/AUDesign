import { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { authContext } from './contexts/authContext'
import Navbar from './components/Navbar/Navbar'

const PrivateRouter = ({children, auth, pathRed, ...rest}) => {
    const { isAuth } = useContext(authContext)
    return (
        <Route 
            {...rest}
            render={({ location }) => (
                isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: pathRed,
                            state: { from: location }
                        }}
                    />
                )
            )}
        />
    )
}

const Routers = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                </Route>
                <PrivateRouter path="/signIn">
                    <h1>Iniciar sesion</h1>
                </PrivateRouter>
            </Switch>
        </Router>
    )
}

export default Routers