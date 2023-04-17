/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/17
*/

import React from 'react'

// 最外层的标签只能是一个闭合的标签，不能由多个兄弟标签组合
class App extends React.Component{
    render() {
        return (
            <div>
                hello react component
                <section>
                    react component
                </section>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        )
    }
}

// function errorTest() {
//     // 返回 undefined
//     return 
//     11111
// }

export default App