// Import the setupLayouts function from virtual:generated-layouts
import { setupLayouts } from 'virtual:generated-layouts'

// Import necessary functions from vue-router
import { createRouter, createWebHistory } from 'vue-router/auto'

// Function to recursively apply layouts to routes
function recursiveLayouts(route) {
  if (route.children) {
    // If the route has children, recursively apply layouts to each child
    for (let i = 0; i < route.children.length; i++)
      route.children[i] = recursiveLayouts(route.children[i])

    return route
  }

  // Apply layout to the route
  return setupLayouts([route])[0]
}

// Create a router instance
const router = createRouter({
  // Use web history mode for navigation
  history: createWebHistory(import.meta.env.BASE_URL),
  // Customize scroll behavior
  scrollBehavior(to) {
    if (to.hash)
      // Scroll to the element with the specified hash smoothly
      return { el: to.hash, behavior: 'smooth', top: 60 }

    // Scroll to the top of the page
    return { top: 0 }
  },
  // Extend routes to apply layouts recursively
  extendRoutes: pages => [
    // Apply recursiveLayouts function to each route
    ...pages.map(route => recursiveLayouts(route)),
  ],
})

// Export the router instance
export { router }

// Default function to install the router instance into the Vue app
export default function (app) {
  app.use(router)
}
