import { CSSProperties, insertGlobal, insertRule } from 'glamor'

const fontFamily: string = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',')

type Style = [ string, CSSProperties ]

// Global
const styles: Style[] = [
  /* Resets */
  // Blocks
  [ 'html,body,h1,h2,h3', { margin: 0, padding: 0 } ],

  // Headings
  [ 'h1,h2,h3', { fontSize: '100%', fontWeight: 'normal' } ],

  // Form
  [ 'button', { margin: 0 } ],

  // Box sizing
  [ 'html', { boxSizing: 'inherit' } ],
  [ '*,*:after,*:before', { boxSizing: 'border-box' } ],

  /* Global styles */
  [ ':root', { fontSize: '.75em' } ],
  [ 'html', {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      WebkitOverflowScrolling: 'touch',
      lineHeight: '1.45',
      overflowX: 'hidden',
      textRendering: 'optimizeLegibility',
    },
  ],
  [ 'body', {
      background: '#efefef',
      color: '#838383',
      display: 'flex',
      fontFamily,
      height: 'calc(100vh - 3em)',
      justifyContent: 'center',
      marginTop: '3em',
    },
  ],
]

const medias: string[] = [
  `@media only screen and (min-width: 25em) and (max-width: 93.75em) {
    :root {
      font-size: calc(.75em + (18 - 12) * ((100vw - 25em) / (1500 - 400)))
    }
  }`,
  `@media only screen and (min-width: 93.75em) {
    :root { font-size: 1.125em }
  }`,
]

styles.forEach(( [ selector, style ]: Style ) => insertGlobal(selector, style))
medias.forEach(( media: string ) => insertRule(media))
