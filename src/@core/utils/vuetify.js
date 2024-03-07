import { cookieRef } from "@/@layouts/stores/config";
import { themeConfig } from "@themeConfig";
import { usePreferredDark } from "@vueuse/core";

/**
 * Function to resolve the Vuetify theme based on user preferences and stored theme settings.
 * @returns {string} - Resolved Vuetify theme ('light' or 'dark').
 */
export const resolveVuetifyTheme = () => {
  // Get user's preferred color scheme from cookie or use the default based on system preference
  const cookieColorScheme = cookieRef('color-scheme', usePreferredDark().value ? 'dark' : 'light');
  // Get stored theme from cookie or use the default theme from theme configuration
  const storedTheme = cookieRef('theme', themeConfig.app.theme).value;

  // Resolve the Vuetify theme based on stored theme and color scheme preferences
  return storedTheme === 'system'
    ? cookieColorScheme.value === 'dark' // Check if user prefers dark mode
      ? 'dark' // Return 'dark' theme if user prefers dark mode
      : 'light' // Return 'light' theme if user prefers light mode
    : storedTheme; // Return stored theme if not using system theme
}
