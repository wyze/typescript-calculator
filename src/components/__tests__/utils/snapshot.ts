import render from 'preact-to-json'

const snapshot = ( component: JSX.Element ) => {
  const tree = render(component)

  expect(tree).toMatchSnapshot()
}

export default snapshot
