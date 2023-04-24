/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/24
*/

import React, {Component} from 'react'
import './CSS/tab.css'
import Film from "./components/Film"
import Cinema from "./components/Cinema"
import Center from "./components/Center"

class App extends Component {
    state = {
        current: 0,
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
                {
                    this.state.current === 0 && <Film></Film>
                }
                {
                    this.state.current === 1 && <Cinema></Cinema>
                }
                {
                    this.state.current === 2 && <Center></Center>
                }
                <ul>
                    {
                        this.state.list.map((item, index) => (
                            <li key = { item.id } className = {
                                this.state.current === index ? 'active' : ''
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
        this.setState({
            current: index
        })
    }
}

export default App;