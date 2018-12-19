import React, {Component} from 'react'
import MavenTreePage from "./container/MavenTreePage"
import {Route, Switch, Redirect, Link} from "react-router-dom"
import WhatsNewPage from "./container/WhatsNewPage"
import {Menu, Dropdown, Icon} from 'antd'

class App extends Component {
    render() {
        const rn = [
            {title: "AndroidX", url: "https://developer.android.com/jetpack/androidx/androidx-rn"},
            {title: "Architecture Components", url: "https://developer.android.com/jetpack/docs/release-notes"}
        ]

        const menu = (
            <Menu>
                {rn.map((it,index) =>
                    <Menu.Item key={index}>
                        <a target="_blank"
                           rel="noopener noreferrer"
                           href={it.url}>
                            {it.title}
                        </a>
                    </Menu.Item>
                )}
            </Menu>
        )

        return (
            <div>
                <div style={{padding: 16}}>
                    <span style={{marginRight: 16}}><Link to={"/all"}>All</Link></span>
                    <span style={{marginRight: 16}}><Link to={"/new"}>What's New</Link></span>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            Release Note<Icon type="down"/>
                        </a>
                    </Dropdown>
                </div>

                <div style={{padding: 16}}>
                    <Switch>
                        <Route exact path={"/"} component={WhatsNewPage}/>
                        <Route exact path={"/all"} component={MavenTreePage}/>
                        <Route exact path={"/new"} component={WhatsNewPage}/>
                        <Route render={() => <Redirect to={"/"}/>}/>
                    </Switch>
                </div>

            </div>
        )
    }
}

export default App
