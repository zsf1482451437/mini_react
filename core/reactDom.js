import React from './react.js';

const ReactDom = {
    createRoot(container) {
        return {
            render(element) {
                React.render(element, container)
            }
        }
    }
}

export default ReactDom;