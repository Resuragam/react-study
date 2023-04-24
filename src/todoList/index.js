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
                    {/*{ item.value }*/}
                    {/*
                        富文本展示
                    */}
                    <span dangerouslySetInnerHTML = {
                        {
                            __html: item.value
                        }
                    }></span>
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

                {/*
                    第一个方案,三目运算符
                */}
                {/*{ this.state.list.length === 0 ? <div>暂无待办事项</div> : null}*/}

                {/*{ this.state.list.length === 0 && <div>暂无待办事项</div>}*/}

                {/*
                    显示与隐藏在 CSS 当中进行操作
                */}
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

        // 清空当前输入框
        this.todoListInput.current.value = ''
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