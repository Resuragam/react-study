/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/27 
*/

import React, {Component, createRef} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div style={{background: 'tomato'}}>
                <button onClick={() => {
                    console.log('子组件通知父组件')
                    this.props.event() // 调用父组件传递的回调函数
                }}>click</button>
                <span>navbar</span>
            </div>
        );
    }
}

class SideBar extends Component {
    render() {
        return (
            <div style={{background: 'skyBlue'}}>
                <ul>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                    <li>111</li>
                </ul>
            </div>
        );
    }
}
class Emit extends Component {
    state = {
        isShow: true
    }
    render() {
        const navBar = createRef()
        return (
            <div>
                <NavBar event={this.handleEvent}></NavBar>
                { this.state.isShow && <SideBar></SideBar> }
            </div>
        );
    }

    handleEvent = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

/*
* 父组件传递子组件：属性
* 子组件传递父组件：回调函数
* */
export default Emit;