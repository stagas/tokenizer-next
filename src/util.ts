/**
 * Utility to join RegExps together.
 */
export const joinRegExps = (regexps: RegExp[]) =>
  new RegExp(regexps.map(x => ('' + x).slice(1, -1)).join('|'), 'gi')

/**
 * Finds first non null entry from tuple.
 */
export const NonNull = (e: [string, string?]) => e[1] != null
