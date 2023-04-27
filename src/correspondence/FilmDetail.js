/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/27 
*/

import React, {Component} from 'react';
import "./CSS/index.css"
import { GlobalContext } from './context'
class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => (
                        <div className={"filmDetail"}>
                            {
                                this.props.synopsis
                            }
                        </div>
                    )
                }
            </GlobalContext.Consumer>
        );
    }
}

export default FilmDetail;