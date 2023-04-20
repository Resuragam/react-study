/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/17 
*/

import React from 'react'
// ReactDom 渲染组件模块
import ReactDom from 'react-dom'
import { createRoot } from "react-dom/client"
// 引入React Component 组件首字母必须大写
// import App from './base/class_component'
// import Function_Component from './base/function_component'
// import Style_Component from './base/style_component'

// import Event_binding_Component from './todoList/event_binding'

// import Ref_Component from './todoList/ref'

// import State_Component from './todoList/state'
import Array_Component from './todoList/arrayrender'

// import Nested_component from "./base/nested_component"

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
/*root.render(<div id='aaa' className='bbb'>
    11111
</div>)*/

// root.render(React.createElement('div', {
//     id: 'aaa',
//     className: 'bbb'
// }, '11111'))

// root.render(<App></App>)

// root.render(<Function_Component></Function_Component>)

// root.render(<Nested_component></Nested_component>)

// root.render(<Style_Component></Style_Component>)

// root.render(<Event_binding_Component></Event_binding_Component>)

// root.render(<Ref_Component></Ref_Component>)

// root.render(<State_Component></State_Component>)

root.render(<Array_Component></Array_Component>)