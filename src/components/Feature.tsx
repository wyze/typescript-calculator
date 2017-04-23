import { StyleAttribute, css, media } from 'glamor'
import { h } from 'preact'
import { small } from '../styles/breakpoints'
import Checkmark from './Checkmark'
import Soon from './Soon'

export enum Emoji { Checkmark, Soon }

type FeatureProps = {
  emoji: Emoji,
  text: string,
}

const feature: StyleAttribute = css(
  {
    alignItems: 'center',
    display: 'flex',
    flexBasis: '40%',
    height: '2em',
  },
  media(small, { flexBasis: '35%' }),
)

const Feature = ({ emoji, text }: FeatureProps): JSX.Element => (
  <div className={feature.toString()}>
    {emoji === Emoji.Soon ? <Soon /> : <Checkmark />}
    <h3>{text}</h3>
  </div>
)

export default Feature
