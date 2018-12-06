import React, {Component} from 'react'
import HomePage from "./container/HomePage"
import {Route, Switch, Redirect, Link} from "react-router-dom"
import WhatsNewPage from "./container/WhatsNewPage"

class App extends Component {
    render() {
        return (
            <div>
                <div style={{padding: 16}}>
                    <span style={{marginRight: 16}}><Link to={"/"}>Home</Link></span>
                    <span style={{marginRight: 16}}><Link to={"/new"}>What's New</Link></span>
                </div>

                <div style={{padding: 16}}>
                    <Switch>
                        <Route exact path={"/"} component={HomePage}/>
                        <Route exact path={"/new"} component={WhatsNewPage}/>
                        <Route render={() => <Redirect to={"/"}/>}/>
                    </Switch>
                </div>

            </div>
        )
    }
}

export default App
