import { h } from 'vue'

// Define layout configuration
export const layoutConfig = {
  app: {
    // Set the title of the app
    title: 'my-layout',

    // Define the logo using the h() function from Vue
    logo: h('img', { src: '/src/assets/logo.svg' }),

    // Uncomment to enable RTL support
    // isRTL: false,
    // Define internationalization settings
    i18n: {
      enable: true,
    },

    // Define the icon renderer, in this case, it's a div
    iconRenderer: h('div'),
  },
}
