/**
 * @Description: 
 * @author Haoyu Huang
 * @date 2023/4/24 
*/

import React, {Component} from 'react'
import axios from 'axios'

class Cinema extends Component {
    constructor() {
        super()

        this.state = {
            cinemaList: [],
            backCinemaList: [],
        }
        // axios 第三方库，专门用于请求数据 请求数据
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3616709',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16823422793607828363214849","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list',
            }
        }).then( res => {
            console.log(res.data.data.cinemas)
            this.setState({
                cinemaList: res.data.data.cinemas,
                backCinemaList: res.data.data.cinemas
            })
        })
    }

    // 生命周期函数 更适合发送ajax请求
    render() {

        return (
            <div>
                <input onInput = { this.handleInput }/>
                <div>
                    {
                        this.state.cinemaList.map((item, index) =>
                            (
                                <dl key = { item.cinemaId }>
                                    <dt> { item.name }</dt>
                                    <dd> { item.address }</dd>
                                </dl>
                            )
                        )
                    }
                </div>
            </div>
        );
    }

    handleInput = (event) => {
        // console.log(event.target.value)

        let newList = this.state.backCinemaList.filter( item => item.name.toUpperCase().includes(event.target.value.toUpperCase())
            || item.address.toUpperCase().includes(event.target.value.toUpperCase()))

        this.setState({
            cinemaList: newList
        })
    }
}

/*
* filter
* */
export default Cinema;