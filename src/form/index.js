/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/27
*/

import React, {Component} from 'react';
import Field from "./Field";
class Form extends Component {
    state = {
        userName: '',
        password: ''
    }
    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label={"用户名"} type={"text"} event={(value) => {
                    console.log(value)
                    this.setState({
                        userName: value
                    })
                }} value={this.state.userName}></Field>
                <Field label={"密码"} type={"password"} event={(value) => {
                    console.log(value)
                    this.setState({
                        password: value
                    })
                }} value={this.state.password}></Field>

                <button onClick={() => {
                    console.log(this.state.userName)
                    console.log(this.state.password)
                }}>登录</button>
                <button onClick={() => {
                    this.setState({
                        userName: '',
                        password: ''
                    })
                }}>取消保存</button>
            </div>
        );
    }
}

export default Form;