/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/27 
*/

import React, {Component} from 'react';
import "./CSS/index.css"
class FilmItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div className={"filmItem"} onClick={() => {
                this.props.event(this.props.synopsis)
            }}>
                <img src={this.props.poster} alt={this.props.name}/>
                <h4>
                    { this.props.name }
                </h4>
            </div>
        );
    }
}

export default FilmItem;