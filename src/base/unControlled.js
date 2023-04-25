/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/25
*/

import React, {Component} from 'react';

class UnControlled extends Component {
    myUserName = React.createRef()

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <input type={'text'} ref={this.myUserName} defaultValue={'hello'}/>

                <button onClick={
                    () => {
                        console.log(this.myUserName.current.value)
                    }
                }>登录</button>
                <button>重置</button>
            </div>
        );
    }
}

export default UnControlled;