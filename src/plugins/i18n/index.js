// Import the createI18n function from the vue-i18n library
import { createI18n } from 'vue-i18n'

// Import the cookieRef function from the config store
import { cookieRef } from '@layouts/stores/config'

// Import the themeConfig object from the themeConfig file
import { themeConfig } from '@themeConfig'

// Dynamically import all JSON files under the './locales' directory
const messages = Object.fromEntries(
  Object.entries(import.meta.glob('./locales/*.json', { eager: true }))
    .map(([key, value]) => [key.slice(10, -5), value.default])
)

// Initialize a variable to store the i18n instance
let _i18n = null

// Define a function to get or create the i18n instance
export const getI18n = () => {
  // If the i18n instance is not yet created
  if (_i18n === null) {
    // Create the i18n instance with the specified options
    _i18n = createI18n({
      // Disable legacy mode
      legacy: false,
      // Set the locale to the value stored in the 'language' cookie, or default to the app's default locale
      locale: cookieRef('language', themeConfig.app.i18n.defaultLocale).value,
      // Set the fallback locale to 'en'
      fallbackLocale: 'en',
      // Set the messages
      messages,
    })
  }

  // Return the i18n instance
  return _i18n
}

// Export a default function that installs the i18n instance into the Vue app
export default function (app) {
  // Use the i18n instance in the Vue app
  app.use(getI18n())
}
