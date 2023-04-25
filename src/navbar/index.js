/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/25 
*/

import React, {Component} from 'react'
import Navbar from "./navbar"

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title={"首页"} leftShow={false}></Navbar>
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title={"列表"} leftShow={true}></Navbar>
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title={"购物车"} leftShow={true}></Navbar>
                </div>
            </div>
        );
    }
}

export default App