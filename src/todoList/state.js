/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/20
*/


import React, {Component} from 'react';

class App extends Component {
    state = {
        text: '收藏',
        textShow: 'true'
    }

    render() {
        return (
            <div>
                <h1>
                    Hello React
                </h1>

                <button onClick= { () => {
                    /*
                    * 修改 state 内部的属性值, 需要通过 setState 间接修改状态
                    * */
                    this.setState({
                        textShow: !this.state.textShow
                    })
                }} >
                    { this.state.textShow ? '收藏' : '取消收藏' }
                </button>
            </div>
        )
    }
}

export default App