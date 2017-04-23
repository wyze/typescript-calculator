import { active, css, hover, keyframes } from 'glamor'

const flash: string = keyframes({
  '0%': { background: 'transparent' },
  '100%': { background: '#dddddd' },
})

export const button = css(
  {
    background: '#6d71ff',
    border: 'none',
    color: '#fafafa',
    cursor: 'pointer',
    display: 'inline-block',
    flex: '25%',
    fontSize: '1.5em',
    lineHeight: 2,
    outline: 'none',
    transition: 'all .75s ease-in-out',
  },
  hover({ background: '#fafafa', color: '#6d71ff' }),
  active({ animation: `${flash} 3s` }),
)
