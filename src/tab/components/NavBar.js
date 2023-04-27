/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/27 
*/

import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div style={{background: "tomato", textAlign: "center"}}>
                <button style={{float: "left"}}>back</button>
                <span >卖座电影</span>
                <button style={{float: "right"}} onClick={() => {
                    this.props.event()
                }}>center</button>
            </div>
        );
    }
}

export default NavBar;