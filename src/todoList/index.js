import React, {Component, createRef} from 'react';

class App extends Component {
    constructor() {
        super()
        this.todoListInput = createRef()
        this.state = {
            listId: 4,
            list: [
                {
                    id: '1',
                    value: 'HTML'
                },
                {
                    id: '2',
                    value: 'CSS'
                },
                {
                    id: '3',
                    value: 'JavaScript'
                },
            ]
        }
    }

    render() {
        const list = this.state.list.map(
            (item, index) => (
                <li key = {item.id}>
                    { item.value }
                    <button onClick = { () => this.handleDeleteClick(item.id) }>
                        delete
                    </button>
                </li>
            )
        )
        return (
            <div>
                <input ref = { this.todoListInput }/>
                <button onClick = { () => this.handleClick()}>add</button>
                <ul>
                    {
                        list
                    }
                </ul>
            </div>
        )
    }

    handleClick = () => {
        console.log('click', this.todoListInput.current.value)
        // 不要直接修改状态
        // this.state.list.push({
        //     id: this.state.listId,
        //     value: this.todoListInput.current.value
        // })
        let newList = this.state.list.slice()
        let listId = this.state.listId
        newList.push({
            id: listId,
            value: this.todoListInput.current.value
        })
        listId ++

        this.setState({
            listId: listId,
            list: newList
        })
    }

    handleDeleteClick = (id) => {
        console.log(id)

        let newList = this.state.list.slice()
        newList = newList.filter(
            item => item.id !== id
        )
        this.setState({
            list: newList
        })
    }
}

export default App