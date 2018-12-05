import React, {Component} from 'react'
import HomePage from "./container/HomePage"
import {Route, Switch, Redirect} from "react-router-dom"
import WhatsNewPage from "./container/WhatsNewPage"

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={"/new"} component={WhatsNewPage}/>
                    <Route render={() => <Redirect to={"/"}/>}/>
                </Switch>
            </div>
        )
    }
}

export default App
