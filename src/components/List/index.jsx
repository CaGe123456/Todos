import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        itemState: PropTypes.func.isRequired
    }


    render() {
        const { todos, itemState, itemDelete } = this.props  //接受父组件传入的 函数，并传给子组件
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item key={todo.id} {...todo} itemState={itemState} itemDelete={itemDelete} />
                    })
                }
            </ul>
        )
    }
}
