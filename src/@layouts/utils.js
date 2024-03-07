import { layoutConfig } from '@layouts/config'






/**
 * Change `dir` attribute based on direction
 * @param dir 'ltr' | 'rtl'
 */
export const _setDirAttr = dir => {
  // Check if document exists for SSR
  if (typeof document !== 'undefined')
    document.documentElement.setAttribute('dir', dir)
}

/**
 * Return dynamic i18n props based on i18n plugin is enabled or not
 * @param key i18n translation key
 * @param tag tag to wrap the translation with
 */
export const getDynamicI18nProps = (key, tag = 'span') => {
  if (!layoutConfig.app.i18n.enable)
    return {}

  return {
    keypath: key,
    tag,
    scope: 'global',
  }
}


/**
 * Convert Hex color to rgb
 * @param hex
 */
export const hexToRgb = hex => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result ? `${Number.parseInt(result[1], 16)},${Number.parseInt(result[2], 16)},${Number.parseInt(result[3], 16)}` : null
}

/**
 *RGBA color to Hex color with / without opacity
 */
export const rgbaToHex = (rgba, forceRemoveAlpha = false) => {
  return (`#${rgba
    .replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
    .split(',') // splits them at ","
    .filter((string, index) => !forceRemoveAlpha || index !== 3)
    .map(string => Number.parseFloat(string)) // Converts them to numbers
    .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
    .map(number => number.toString(16)) // Converts numbers to hex
    .map(string => (string.length === 1 ? `0${string}` : string)) // Adds 0 when length of one number is 1
    .join('')}`)
}
