/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/25 
*/

import React, {Component} from 'react'
import Navbar from "./navbar"

class App extends Component {
    render() {
        const obj = {
            title: '标题',
            leftShow: true
        }
        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title={"首页"} leftShow={false}></Navbar>
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title={"列表"}></Navbar>
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title={"购物车"}></Navbar>
                </div>
                {/*
                    对象展开方式，简写
                */}
                <Navbar {...obj}></Navbar>
            </div>
        );
    }
}

export default App