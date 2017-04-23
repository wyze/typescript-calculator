import { Provider } from 'preact-redux'
import { h } from 'preact'
import App from './components/App'
import store from './redux'

const Root = (): JSX.Element => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
