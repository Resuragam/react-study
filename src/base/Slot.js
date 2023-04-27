/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/27 
*/

import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                child
                {/*
                    插槽
                */}
                {
                    this.props.children
                }
            </div>
        );
    }
}

class Slot extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>
                        222
                    </div>
                    <div>
                        333
                    </div>
                </Child>
            </div>
        );
    }
}

export default Slot;