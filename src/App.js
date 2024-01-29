import React, { Component } from 'react'
import './style.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
    //状态在哪，操作状态的方法就在那个组件里

    //App 的状态
    state = {
        todos: [
            { id: '001', name: 'coding', done: true },
            { id: '002', name: 'runing', done: false },
            { id: '003', name: 'swiming', done: false }]
    }
    // 添加new item 
    addTodo = (todoObj) => {  //传回了一个Obj
        const { todos } = this.state

        const newTodos = [todoObj, ...todos] //把新的OBJ放入 状态里

        this.setState({ todos: newTodos })

    }
    // 更改todos里每个项目的 checked 状态 
    itemState = (id, done) => {
        const { todos } = this.state

        const newTodos = todos.map((item) => {   // 靠id寻找item，更改done的状态
            if (item.id === id) return { ...item, done } // id找到，更改其状态
            else return item
        })

        this.setState({ todos: newTodos })

    }

    itemDelete = (id) => {
        const { todos } = this.state

        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({ todos: newTodos })

    }

    render() {
        const { todos } = this.state

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} itemState={this.itemState} itemDelete={this.itemDelete} />
                    <Footer />
                </div>
            </div>

        )
    }
}
