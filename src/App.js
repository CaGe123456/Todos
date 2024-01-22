import React, { Component } from 'react'
import './style.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {


    state = {
        todos: [{ id: '001', name: 'coding', Done: 'False' },
        { id: '001', name: 'coding', Done: 'False' },
        { id: '001', name: 'coding', Done: 'False' }]
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header a={1} />
                    <List b={2} todos={this.state.todos} />
                    <Footer />
                </div>
            </div>

        )
    }
}
