import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Layout from '../containers/Layout';
import Player from '../containers/Player';

const App = () => (
    <Router>
        <Switch>
            <Layout>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/register' component={Register}></Route>
                <Route excat path="/player/:id" component={Player}></Route>
            </Layout>
        </Switch>
    </Router>
)

export default App