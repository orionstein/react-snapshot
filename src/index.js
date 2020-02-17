import ReactDOM from 'react-dom';
import ReactDOMServer from 'preact/compat/server.js';

export const render = (rootComponent, domElement) => {
  if (navigator.userAgent.match(/Node\.js/i) && window && window.reactSnapshotRender) {
    domElement.innerHTML = ReactDOMServer.renderToString(rootComponent)
    window.reactSnapshotRender()
  } else {
    ReactDOM.render(rootComponent, domElement)
  }
}
