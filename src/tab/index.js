/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/24
*/

import React, {Component} from 'react'
import './CSS/tab.css'
import TabBar from "./components/TabBar";
import Film from "./components/Film"
import Cinema from "./components/Cinema"
import Center from "./components/Center"
import NavBar from "./components/NavBar";

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
                <NavBar event={() => {
                    console.log('NavBar')
                    this.setState({
                        current: 2
                    })
                }}></NavBar>
                {/*{
                    this.state.current === 0 && <Film></Film>
                }
                {
                    this.state.current === 1 && <Cinema></Cinema>
                }
                {
                    this.state.current === 2 && <Center></Center>
                }*/}
                {
                    this.handleWitch(this.state.current)
                }
                <TabBar event={this.handleModifyCurrent} current={this.state.current}></TabBar>
            </div>
        );
    }

    handleModifyCurrent = (index) => {
        // console.log(index)
        this.setState({
            current: index
        })
    }

    handleWitch(index) {
        switch (index) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }
}

export default App;