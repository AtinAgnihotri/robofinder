import React, { Component } from 'react';
import './Hello.css';
import 'tachyons';

class Hello extends Component{
    render() {
        return (
        <div className="hello f1">
            <h1>Hello World!!</h1>
            <p>{this.props.greeting}, Welcome to the world of <em>React</em>.</p>
        </div>
        );
    }
}

/*
    The class here is just functions, so this would also work

const Hello = (props) => {
    return (
    <div className="hello f1">
        <h1>Hello World!!</h1>
        <p>{props.greeting}, Welcome to the world of <em>React</em>.</p>
    </div>
    );
}

*/

export default Hello;