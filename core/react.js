const createTextNode = (text) => {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

const createElement = (type, props, ...children) => {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => typeof child === 'string' ? createTextNode(child) : child) // 将字符串转换为文本节点
        }
    }
}
const render = (element, parentDom) => {
    // 创建dom
    const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type)
    
    // 设置props: id class ...
    Object.keys(element.props).forEach((key) => {
        if (key === 'children') {
            element.props.children.forEach((child) => {
                render(child, dom)
            })
        } else {
            dom[key] = element.props[key]
        }
    })

    // 添加到父节点
    parentDom.appendChild(dom)
}

const React = {
    createElement,
    render
}

export default React;
