import React, {Component} from 'react'
import * as api from '../api'
import moment from "moment"

class WhatsNewPage extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        api.getPackageList().then(res => {
            this.setState({data: res.data.sort((a, b) => a.date - b.date)})
        }).catch(err => console.log(err))
    }

    toDependency = (mavenPackage) => {
        return `${mavenPackage.group}:${mavenPackage.artifact}:${mavenPackage.version}`
    }

    render() {
        const newList = []
        for (let i = 0; i < this.state.data.length; i++) {
            if (i === 0 || moment(this.state.data[i].date).diff(moment(this.state.data[i - 1].date), 'days') !== 0) {
                newList.push(<h2>{moment(this.state.data[i].date).calendar()}</h2>)
            }
            newList.push(
                <div>
                    <code>{this.toDependency(this.state.data[i])}</code>
                </div>
            )
        }

        return (
            <div>
                <h1>What's New</h1>
                {newList}
            </div>
        )
    }
}

export default WhatsNewPage