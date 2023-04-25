/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/25 
*/

import React, {Component} from 'react';

class Controlled extends Component {
    state = {
        userName: 'react'
    }
    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <input type={'text'} value={this.state.userName}
                onChange={(event) => {
                    console.log('onchange', event.target.value)
                    this.setState({
                        userName: event.target.value
                    })
                }}/>
                <button onClick={
                    () => {
                        console.log(this.state.userName)
                    }
                }>登录</button>
                <button onClick={() => {
                    this.setState({
                        userName: ''
                    })
                }}>重置</button>
            </div>
        );
    }
}

export default Controlled