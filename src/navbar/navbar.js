/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/25
*/

import React, {Component} from 'react';

class Navbar extends Component {
    /*
    * 组件是父组件传递的 this.props
    * */
    render() {
        let { title, leftShow } = this.props
        return (
            <div>
                { leftShow && <button>返回</button>}
                navbar - { title }
                <button>home</button>
            </div>
        );
    }
}

export default Navbar;