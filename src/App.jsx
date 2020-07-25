import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Router>
                <Switch>
                    <Route path="/main">Main</Route>
                    <Route path="/city">City</Route>
                    <Route exact path="/">Welcome</Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
