import { h } from 'preact'
import Svg from './Svg'

const Checkmark = (): JSX.Element => (
  <Svg>
    <circle cx="32" cy="32" fill="#4bd37b" r="30" />
    <path d="m46 14l-21 21.6-7-7.2-7 7.2 14 14.4 28-28.8z" fill="#fff" />
  </Svg>
)

export default Checkmark
