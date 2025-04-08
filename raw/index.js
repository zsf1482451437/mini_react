// 创建节点，设置节点属性，添加到根容器
// const dom = document.createElement('div')
// dom.id = 'app'
// const root = document.querySelector('#app')
// root.appendChild(dom)

// 创建子节点，设置节点内容，添加到节点
// const textNode = document.createTextNode('App')
// textNode.nodeValue = 'App'
// dom.appendChild(textNode)

// react - vdom - js object
// type props children
// const textEl = {
//     type: 'TEXT_ELEMENT',
//     props: {
//         nodeValue: 'App',
//         children: []
//     }
// }
// const el = {
//     type: 'div',
//     props: {
//         id: 'app',
//         children: [textEl]
//     }
// }

// const dom = document.createElement(el.type)
// dom.id = el.props.id
// const root = document.querySelector('#app')
// root.appendChild(dom)

// const textNode = document.createTextNode('')
// textNode.nodeValue = textEl.props.nodeValue
// dom.appendChild(textNode)
//  函数形式创建vdom
// const createTextNode = (text) => {
//     return {
//         type: 'TEXT_ELEMENT',
//         props: {
//             nodeValue: text,
//             children: []
//         }
//     }
// }

// const createElement = (type, props, ...children) => {
//     return {
//         type,
//         props: {
//             ...props,
//             children: children.map(child => typeof child === 'string' ? createTextNode(child) : child) // 将字符串转换为文本节点
//         }
//     }
// }
// // const textEl = createTextNode('App')
// // const App = createElement('div', { id: 'app' }, textEl)

// // const dom = document.createElement(App.type)
// // dom.id = App.props.id
// // const root = document.querySelector('#app')
// // root.appendChild(dom)

// // const textNode = document.createTextNode('')
// // textNode.nodeValue = textEl.props.nodeValue
// // dom.appendChild(textNode)

// // 抽象创建vdom
// const render = (element, parentDom) => {
//     // 创建dom
//     const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type)
    
//     // 设置props: id class ...
//     Object.keys(element.props).forEach((key) => {
//         if (key === 'children') {
//             element.props.children.forEach((child) => {
//                 render(child, dom)
//             })
//         } else {
//             dom[key] = element.props[key]
//         }
//     })

//     // 添加到父节点
//     parentDom.appendChild(dom)
// }

// const App = createElement('div', { id: 'app' }, 'app', ' hi')
// const root = document.querySelector('#app')
// render(App, root)

// 目标：模拟react的方式
// import ReactDom from 'react-dom/client';
// import App from './App';

// ReactDom.createRoot(document.getElementById('root')).render(App);
// const ReactDom = {
//     createRoot(container) {
//         return {
//             render(element) {
//                 render(element, container)
//             }
//         }
//     }
// }

import ReactDom from '../core/reactDom.js';
import App from './App.js';
ReactDom.createRoot(document.getElementById('root')).render(App)