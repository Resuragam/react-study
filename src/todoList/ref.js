/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/20
 */

import React, { Component } from 'react'

export default class App extends Component {
    a = 100

    /*
    * React 获取 DOM 元素的方式
    * */
    todoListInput = React.createRef()

    render() {
        return (
            <div>
                <input ref = { this.todoListInput }/>
                <button onClick = { () => this.handleClick() }> add4 </button>
            </div>
        )
    }

    handleClick = () => {
        /*
        * 绑定普通的标签上, 可以获取到真实的 DOM 值
        * 在组件对象中, 可以获取到组件实例
        * createRef() 创建一个对象， this.todoListInput.current 获取该对象的原生 DOM 元素
        * */
        console.log(this.todoListInput.current.value)
    }
}
