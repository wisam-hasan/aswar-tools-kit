import { stringifyQuery } from 'ufo'
import { toValue, computed } from 'vue'

/**
 * Create a computed property representing a URL with query parameters.
 * @param {string} url The base URL.
 * @param {object} options Additional options, including query parameters.
 * @returns {ComputedRef<string>} Computed property representing the complete URL.
 */
export const createUrl = (url, options) => computed(() => {
  if (!options?.query)
    return toValue(url)

  // Convert URL and query parameters to their raw values
  const _url = toValue(url)
  const _query = toValue(options?.query)
  const queryObj = Object.fromEntries(Object.entries(_query).map(([key, val]) => [key, toValue(val)]))

  // Construct the URL with query parameters
  return `${_url}${queryObj ? `?${stringifyQuery(queryObj)}` : ''}`
})
