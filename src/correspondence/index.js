/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/27
*/

import React, {Component} from 'react';
import axios from 'axios'
import FilmItem from "./FilmItem";
import FilmDetail from "./FilmDetail";
import "./CSS/index.css"
class App extends Component {

    constructor() {
        super()
        this.state = {
            filmList: [],
            synopsis: ''
        }
        axios.get("/test.json").then((res) => {
            console.log(res.data)
            this.setState({
                filmList: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.filmList.map(item =>
                        <FilmItem key={item.filmId} {...item} event={(value) => {
                            console.log('父组件接受')
                            this.setState({
                                synopsis: value
                            })
                        }}></FilmItem>
                    )
                }
                <FilmDetail synopsis={this.state.synopsis}></FilmDetail>
            </div>
        );
    }
}

export default App;