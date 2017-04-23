import './styles/global'
import { h, render } from 'preact'

let elem: Element

const init = () => {
  const Root = require('./Root.tsx').default
  elem = render(h(Root, {}), (document.getElementById('root') as HTMLElement), elem)
}

if ( process.env.NODE_ENV !== 'production' ) {
  // tslint:disable-next-line no-var-requires
  require('preact/devtools')

  if ( module.hot ) {
    module.hot.accept('./Root.tsx', init)
  }
}

init()
