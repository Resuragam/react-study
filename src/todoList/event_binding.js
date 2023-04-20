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

    handleClickTree = () => {
        console.log('button click3')
        console.log(this)
    }

    handleClickFour = () => {
        console.log('button click4')
        console.log(this)
    }
}