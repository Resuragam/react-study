/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/17 
*/

import React from 'react'
// ReactDom 渲染组件模块
import ReactDom from 'react-dom'
import { createRoot } from "react-dom/client"
import App from './base/class_component'


// React18 不再支持ReactDom.render方式进行渲染
// ReactDom.render(<div>22222</div>, document.getElementById('root'))



// React18 渲染方式
const root = createRoot(document.getElementById('root'))
// root.render(<div>
//     <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JavaScript</li>
//     </ul>
// </div>)

/*
* jsx = js + xml
* */

/*
* class中使用className
*
* JSX 使用 React 构造组件，babel 进行编译 --> JavaScript 对象 --> ReactDom.render() --> DOM 元素 --> 插入页面
* */
root.render(<div id='aaa' className='bbb'>
    11111
</div>)

// root.render(React.createElement('div', {
//     id: 'aaa',
//     className: 'bbb'
// }, '11111'))

root.render(<App></App>)