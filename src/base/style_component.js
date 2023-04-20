/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/17
 */

import React, { Component } from 'react'
import './css/style_component.css' // 导入 css 模板， webpack支持

export default class App extends Component{

    // 模板语法
    render() {
        let message = 'Hello React'
        // 1. 对象式样式写法
        const style = {
            background: 'tomato',
            fontSize: '30px'
        }
        return (
            <div>
                { 10 + 20 } - { message }
                <div style = { style }>
                    style_component
                </div>

                <div className = 'active'>
                    import style module
                </div>

                <label htmlFor = 'userName'>用户名：</label>
                <input type = 'text' id = 'userName'/>
            </div>
        )
    }
}