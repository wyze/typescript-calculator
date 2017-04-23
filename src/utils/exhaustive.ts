const exhaustive = ( val: never ): void => {
  if ( val ) { /* do nothing */ }
}

export default exhaustive
