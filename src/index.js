/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/17 
*/

import React from 'react'
// ReactDom 渲染组件模块
import ReactDom from 'react-dom'
import { createRoot } from "react-dom/client"

// React18 不再支持ReactDom.render方式进行渲染
// ReactDom.render(<div>22222</div>, document.getElementById('root'))

// React18 渲染方式
const root = createRoot(document.getElementById('root'))
root.render(<div>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
</div>)

/*
* jsx = js + xml
* */