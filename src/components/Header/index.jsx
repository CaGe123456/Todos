import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    //对接受的props 进行类型和必要性限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const { keyCode, target } = event
        if (keyCode !== 13) return
        if (target.value === "") return

        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        target.value = ""

    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
