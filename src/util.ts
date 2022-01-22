/**
 * Utility to join RegExps together.
 * @private
 */
export const joinRegExps = (regexps: RegExp[]) =>
  new RegExp(
    regexps
      .map(x => x.toString())
      .map(x => x.slice(x.indexOf('/') + 1, x.lastIndexOf('/')))
      .join('|'),
    'gi'
  )
