// Import necessary components, functions, and enums
import { VIcon } from 'vuetify/components/VIcon'; // Vuetify icon component
import { defineThemeConfig } from '@core'; // Function to define theme config from core module
import { Skins } from '@core/enums'; // Enum for skins
import { h } from 'vue'; // Hyperscript function for Vue
// ❗ Logo SVG must be imported with ?raw suffix
import logo from '@images/logo.svg?raw'; // Import logo SVG

// Define theme configuration using defineThemeConfig function
export const { themeConfig, layoutConfig } = defineThemeConfig({
  // App configuration
  app: {
    // App title
    title: 'Aswar-Tool-Kit',
    // App logo element
    logo: h('div', { innerHTML: logo, style: 'line-height:0; color: rgb(var(--v-global-theme-primary))' }),
    // Internationalization configuration
    i18n: {
      // Enable internationalization
      enable: true,
      // Default locale
      defaultLocale: 'en',
      // Language configuration
      langConfig: [
        {
          label: 'English',
          i18nLang: 'en',
          isRTL: false,
        },
        {
          label: 'French',
          i18nLang: 'fr',
          isRTL: false,
        },
        {
          label: 'Arabic',
          i18nLang: 'ar',
          isRTL: true,
        },
      ],
    },
    // Theme configuration
    theme: 'dark', // Default to system theme
    skin: Skins.Default, // Default skin
    iconRenderer: VIcon, // Icon renderer
  },
});
