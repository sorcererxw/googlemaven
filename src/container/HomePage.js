import React, {Component} from 'react'
import * as api from '../api'
import {Tree} from 'antd'

const {TreeNode} = Tree

class HomePage extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        // api.getMavenPackage().then(res => {
        //     console.log(res)
        //     const list = res.data
        //     console.log(list)
        //     const data = {}
        //     for (const item of list) {
        //         if (data[item.group] === undefined) {
        //             data[item.group] = {}
        //         }
        //         if (data[item.group][item.artifact] === undefined) {
        //             data[item.group][item.artifact] = []
        //         }
        //         data[item.group][item.artifact].push({
        //             version: item.version,
        //             date: item.createDate
        //         })
        //     }
        //     console.log(data)
        //     this.setState({data: data})
        // }).catch(err => console.log(err))
    }

    onLoadData = treeNode => new Promise((resolve) => {
        if (treeNode.props.children) {
            resolve()
            return
        }
        setTimeout(() => {
            treeNode.props.dataRef.children = [
                {title: 'Child Node', key: `${treeNode.props.eventKey}-0`},
                {title: 'Child Node', key: `${treeNode.props.eventKey}-1`},
            ]
            this.setState({
                treeData: [...this.state.treeData],
            })
            resolve()
        }, 1000)
    })

    renderTreeNodes = data => data.map((item) => {
        if (item.children) {
            return (
                <TreeNode title={item.title} key={item.key} dataRef={item}>
                    {this.renderTreeNodes(item.children)}
                </TreeNode>
            )
        }
        return <TreeNode {...item} dataRef={item}/>
    })

    render() {
        // const groupNodes = []
        // for (const groupName in this.state.data) {
        //     const group = this.state.data[groupName]
        //     if (group === undefined) continue
        //     console.log(groupName)
        //
        //     const artifactNodeList = []
        //     for (const artifactName in group) {
        //         const artifact = group[artifactName]
        //         if (artifact === undefined) continue
        //         console.log(artifactName)
        //         artifactNodeList.push(
        //             <TreeNode title={artifactName}>
        //                 {this.state.data[group][artifact].map(it =>
        //                     <TreeNode title={it.version}>
        //                         <code>{it.date}</code>
        //                     </TreeNode>
        //                 )}
        //             </TreeNode>
        //         )
        //     }
        //     groupNodes.push(
        //         <TreeNode title={groupName}>
        //             {artifactNodeList}
        //         </TreeNode>
        //     )
        // }

        return (
            <div>
                <div>Google Maven</div>
                <Tree loadData={this.onLoadData}>
                    {this.renderTreeNodes(this.state.data)}
                </Tree>
            </div>
        )
    }
}

export default HomePage