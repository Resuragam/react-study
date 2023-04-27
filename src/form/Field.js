/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/27
*/

import React, {Component} from 'react';

class Field extends Component {
    render() {
        return (
            <div style={{background: "tomato"}}>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(event) => {
                    this.props.event(event.target.value)
                }} value={this.props.value}/>
            </div>
        );
    }
}

export default Field;