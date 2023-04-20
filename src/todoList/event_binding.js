/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/20
*/

import React, { Component } from 'react'

export default class App extends Component {
    a = 100

    render() {
        return (
            <div>
                <input/>

                <button onClick = { () => {
                    /*
                    * 函数体
                    * 逻辑过多会出现错误
                    * */
                    console.log('button click')
                    console.log(this)
                } }> add1 </button>

                {/*
                    this 会丢失
                    解决方案: 使用bind, 修正this指向
                */}
                <button onClick = { this.handleClick.bind(this) }> add2 </button>

                <button onClick = { this.handleClickTree }> add3 </button>

                <button onClick = { () => this.handleClickFour() }> add4 </button>
            </div>
        )
    }

    handleClick() {
        console.log('button click2')
        console.log(this)
    }

    handleClickTree = (event) => {
        console.log('button click3')
        console.log(this)
        console.log(event.target) // 原生的 event 属性可以支持
    }

    handleClickFour = () => {
        console.log('button click4')
        console.log(this)
    }
}

/*
* React 并不会真正绑定事件到每一个具体的元素上面，而是采用事件代理的模式
* 事件捕获与冒泡阶段，通过 e.target 获取原生元素，检测是否存在事件监听器
* 优点: 占用内存小，不需要关心事件解绑，减小心智负担，避免内存泄漏
* */