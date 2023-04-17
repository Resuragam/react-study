/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/17
*/
import React, { Component } from 'react'

/*function App() {
    return (
        <div>
            <NavBar></NavBar>
            <TodoList></TodoList>
        </div>
    )
}

function NavBar() {
    return (
        <div>
            Navbar
        </div>
    )
}

function TodoList() {
    return (
        <div>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </div>
    )
}*/

const Child = () => (
    <section>
        child
    </section>
)

class Navbar extends Component {
    render() {
        return (
            <div>
                Navbar
                <Child></Child>
            </div>
        )
    }
}

// const TodoList = () => {
//     return (
//         <div>
//             <ul>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>JavaScript</li>
//             </ul>
//         </div>
//     )
// }

const TodoList = () => (
    <div>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </div>
)

// 组件之间可以嵌套，无论是函数式组件还是类组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <TodoList></TodoList>
            </div>
        )
    }
}

// export default App