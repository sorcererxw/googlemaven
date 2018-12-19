import React, {Component} from 'react'
import * as api from '../api'
import {Tree} from 'antd'

const {TreeNode} = Tree

class MavenTreePage extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        api.getFullGroup().then(res => {
            this.setState({data: res.data})
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Google Maven</h1>
                <Tree>
                    {this.state.data.map(group =>
                        <TreeNode title={group.name}>{
                            group.artifact.map(artifact =>
                                <TreeNode title={artifact.name}>{
                                    artifact.version.map(version =>
                                        <TreeNode title={version.name}>
                                            <code>{version.date}</code>
                                        </TreeNode>
                                    )
                                }</TreeNode>
                            )
                        }</TreeNode>
                    )}
                </Tree>
            </div>
        )
    }
}

export default MavenTreePage