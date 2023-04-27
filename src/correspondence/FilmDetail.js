/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/27 
*/

import React, {Component} from 'react';
import "./CSS/index.css"
const GlobalContext = React.createContext() // 创建context对象

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
                            {
                                value
                            }
                        </div>
                    )
                }
            </GlobalContext.Consumer>
        );
    }
}

export default FilmDetail;