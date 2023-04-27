/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/27
*/

import React, {Component} from 'react';

class TabBar extends Component {
    state = {
        list: [
            {
                id: 1,
                text: '电影'
            },
            {
                id: 2,
                text: '影院'
            },
            {
                id: 3,
                text: '我的'
            },
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key = { item.id } className = {
                                this.props.current === index ? 'active' : ''
                            } onClick = { () => this.handleClickTab(index) }>
                                { item.text }
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }

    handleClickTab = (index) => {
        // console.log(index)
        // 修改父组件的状态
        this.props.event(index)
    }
}

export default TabBar;