import React, {Component} from 'react';

class App extends Component {

    constructor() {
        super()
        this.state = {
            list: ['HTML', 'CSS', 'JavaScript']
        }
    }

    render() {
        const newList = this.state.list.map((item, index) => <li key = {index}>{item}</li>)
        return (
            <div>
                <ul>
                    { newList }
                </ul>
            </div>
        );
    }
}

/*
* 原生JavaScript - map 方法
* */

export default App