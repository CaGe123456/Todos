import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = { mouse: false }

    handleMouse = (flag) => {  //鼠标进入和移除 更改item mouse的状态
        return () => {
            this.setState({ mouse: flag })
        }

    }
    //item 勾选框改变时 出发该函数，返回 事件对象的id和状态
    handleCheck = (id) => {
        return (event) => {
            this.props.itemState(id, event.target.checked);
        }

    }

    handleDelete = (id) => {
        return () => {
            if (window.confirm('Confirm?')) {
                this.props.itemDelete(id)
            }
        }
    }

    render() {
        const { name, done, id } = this.props

        return (
            <li style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input onChange={this.handleCheck(id)} type="checkbox" checked={done} />
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
