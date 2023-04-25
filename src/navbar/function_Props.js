/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/25
*/

import React, {Component} from 'react';

import Navbar from "./navbar"
import SideBar from './SideBar'

class FunctionProps extends Component {
    render() {
        return (
            <div>
                <Navbar title={"导航"}></Navbar>
                {/*
                    函数式组件
                */}
                <SideBar backgroundColor={'tomato'} position={"left"}></SideBar>
            </div>
        );
    }
}

export default FunctionProps;