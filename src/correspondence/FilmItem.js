/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/27 
*/

import React, {Component} from 'react';
import "./CSS/index.css"
import { GlobalContext } from './context'

class FilmItem extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) =>  (
                            <div className={"filmItem"} onClick={() => {
                                this.props.event(this.props.synopsis)
                                console.log(value)
                            }}>
                                <img src={this.props.poster} alt={this.props.name}/>
                                <h4>
                                    { this.props.name }
                                </h4>
                            </div>
                        )
                }
            </GlobalContext.Consumer>

        );
    }
}

export default FilmItem;