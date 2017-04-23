import { FunctionalComponent, h } from 'preact'
import { render } from 'preact-render-to-string'

const snapshot = ( Component: FunctionalComponent<any>, props?: object ) => {
  const tree = render(h(Component, props), null, { pretty: '  ', shallow: true })

  expect(tree).toMatchSnapshot()
}

export default snapshot
