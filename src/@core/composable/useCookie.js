// Ported from Nuxt: https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/composables/cookie.ts
import { parse, serialize } from 'cookie-es'
import { destr } from 'destr'
import { watch, ref } from 'vue'

// Default options for cookies
const CookieDefaults = {
  path: '/',
  watch: true,
  // Custom decoding function
  decode: val => destr(decodeURIComponent(val)),
  // Custom encoding function
  encode: val => encodeURIComponent(typeof val === 'string' ? val : JSON.stringify(val)),
}

/**
 * Hook to handle cookies.
 * @param {string} name The name of the cookie.
 * @param {object} _opts Additional options for the cookie.
 * @returns {Ref<any>} Reference to the cookie value.
 */
export const useCookie = (name, _opts) => {
  // Merge options with defaults
  const opts = { ...CookieDefaults, ...(_opts || {}) }
  // Parse cookies from document
  const cookies = parse(document.cookie, opts)
  // Initialize a reactive reference to the cookie value
  const cookie = ref(cookies[name] ?? opts.default?.())

  // Watch for changes in the cookie value
  watch(cookie, () => {
    // Serialize and set the cookie in the document
    document.cookie = serializeCookie(name, cookie.value, opts)
  })

  return cookie
}

/**
 * Serialize a cookie value.
 * @param {string} name The name of the cookie.
 * @param {any} value The value of the cookie.
 * @param {object} opts Additional options for the cookie serialization.
 * @returns {string} Serialized cookie string.
 */
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === undefined)
    // If the value is null or undefined, delete the cookie
    return serialize(name, value, { ...opts, maxAge: -1 })

  // Otherwise, serialize the cookie with provided options
  return serialize(name, value, opts)
}
