import { StyleAttribute, css, media } from 'glamor'
import { h } from 'preact'
import { small } from '../styles/breakpoints'
import Features from './Features'
import Title from './Title'

const hero: StyleAttribute = css(
  {
    background: '#dedede',
    borderRadius: 5,
    display: 'block',
    marginBottom: '4em',
    padding: '1em',
    textAlign: 'center',
    width: '30em',
  },
  media(small, { width: '35em' }),
)

const Hero = (): JSX.Element => (
  <div className={hero.toString()}>
    <Title />
    <Features />
  </div>
)

export default Hero
