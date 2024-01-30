import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    checkAll = (event) => {
        this.props.checkAll(event.target.checked)

    }


    handleCLearAllDone = () => {

        this.props.clearAllDone()

    }

    render() {

        const { todos } = this.props
        // completed
        const count = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        // total
        const total = todos.length


        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.checkAll} checked={count === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{count}</span> / 全部{total}
                </span>
                <button onClick={this.handleCLearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
