/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/27 
*/

import React, {Component} from 'react';
import "./CSS/index.css"
class FilmDetail extends Component {
    render() {
        return (
            <div className={"filmDetail"}>
                {
                    this.props.synopsis
                }
            </div>
        );
    }
}

export default FilmDetail;