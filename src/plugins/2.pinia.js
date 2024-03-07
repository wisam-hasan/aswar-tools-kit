// Import the createPinia function from the Pinia library
import { createPinia } from 'pinia'

// Create a Pinia store instance
export const store = createPinia()

// Export a default function that installs the Pinia store into the Vue app
export default function (app) {
  // Use the Pinia store in the Vue app
  app.use(store)
}
