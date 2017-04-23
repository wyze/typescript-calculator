import { StyleAttribute, css } from 'glamor'
import { h } from 'preact'

const title: StyleAttribute = css({ fontSize: '1.5em' })

const Title = (): JSX.Element => (
  <h1 className={title.toString()}>
    TypeScript Calculator
  </h1>
)

export default Title
