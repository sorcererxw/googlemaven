import React, {Component} from 'react'
import * as api from '../api'
import moment from "moment"
import {Collapse} from 'antd'

const Panel = Collapse.Panel

class WhatsNewPage extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        api.getPackageList().then(res => {
            this.setState({data: res.data.sort((a, b) => a.date >= b.date ? -1 : 1)})
        }).catch(err => console.log(err))
    }

    toDependency = (mavenPackage) => {
        return `${mavenPackage.group}:${mavenPackage.artifact}:${mavenPackage.version}`
    }

    render() {
        const map = {}
        for (let i = 0; i < this.state.data.length; i++) {
            const date = moment(this.state.data[i].date).format("YYYY/MM/DD")
            if (map[date] === undefined) map[date] = []
            map[date].push(this.state.data[i])
        }

        const panels = []
        let key = 1
        for (let date in map) {
            const panel = <Panel header={date} key={key++}>
                {
                    map[date].map(it =>
                        <div><code>{this.toDependency(it)}</code></div>
                    )
                }
            </Panel>
            panels.push(panel)
        }

        return (
            <div>
                <h1>What's New</h1>
                <Collapse accordion>
                    {panels}
                </Collapse>
            </div>
        )
    }
}

export default WhatsNewPage