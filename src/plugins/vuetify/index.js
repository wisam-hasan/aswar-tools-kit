// Import necessary functions and modules
import { deepMerge } from '@antfu/utils'; // Function for deep merging objects
import { useI18n } from 'vue-i18n'; // Function for using Vue I18n
import { createVuetify } from 'vuetify'; // Function for creating Vuetify instance
import { VBtn } from 'vuetify/components/VBtn'; // Vuetify button component
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'; // Function for creating Vue I18n adapter for Vuetify
import defaults from './defaults'; // Default Vuetify options
import { icons } from './icons'; // Vuetify icons
import { staticPrimaryColor, themes } from './theme'; // Static primary color and theme configurations
import { getI18n } from '@/plugins/i18n/index'; // Function for getting Vue I18n instance

// Styles
import { cookieRef } from '@/@layouts/stores/config'; // Reference to cookie store for configuration
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons stylesheet
import 'vuetify/styles'; // Vuetify styles
import { resolveVuetifyTheme } from '@/@core/utils/vuetify'; // Function for resolving Vuetify theme

export default function (app) {
  // Define theme values based on cookies
  const cookieThemeValues = {
    defaultTheme: resolveVuetifyTheme(), // Resolve default Vuetify theme
    themes: {
      light: {
        colors: {
          primary: cookieRef('lightThemePrimaryColor', staticPrimaryColor).value, // Primary color for light theme
        },
      },
      dark: {
        colors: {
          primary: cookieRef('darkThemePrimaryColor', staticPrimaryColor).value, // Primary color for dark theme
        },
      },
    },
  };

  // Merge default and cookie theme values
  const optionTheme = deepMerge({ themes }, cookieThemeValues);

  // Create Vuetify instance with options
  const vuetify = createVuetify({
    aliases: {
      IconBtn: VBtn, // Alias for VBtn component
    },
    defaults, // Default Vuetify options
    icons, // Vuetify icons
    theme: optionTheme, // Theme options
    locale: {
      adapter: createVueI18nAdapter({ i18n: getI18n(), useI18n }), // Vue I18n adapter for Vuetify
    },
  });

  // Use Vuetify instance in the Vue app
  app.use(vuetify);
}
