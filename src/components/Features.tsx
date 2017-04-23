import { StyleAttribute, css } from 'glamor'
import { h } from 'preact'
import Feature, { Emoji } from './Feature'

const features: StyleAttribute = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
})

const Features = (): JSX.Element => (
  <div className={features.toString()}>
    <Feature emoji={Emoji.Checkmark} text="Simple operations" />
    <Feature emoji={Emoji.Checkmark} text="Decimals" />
    <Feature emoji={Emoji.Checkmark} text="Percentage" />
    <Feature emoji={Emoji.Checkmark} text="Positive/Negative" />
    <Feature emoji={Emoji.Soon} text="Advanced options" />
    <Feature emoji={Emoji.Soon} text="Operation history" />
  </div>
)

export default Features
