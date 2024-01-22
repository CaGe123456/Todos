//create  shell ocomponent
import React, { Component } from "react";
import Component1 from './Compoents/Component1/Component1'
import Hello from './Compoents/Component2/Hello'


export default class App extends Component {

    render() {
        return (
            <div>
                <Component1 />
                <Hello />
            </div>
        )
    }
}

