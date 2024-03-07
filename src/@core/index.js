/**
 * Function to define theme and layout configurations based on user-defined configuration.
 * @param {object} userConfig - User-defined configuration object.
 * @returns {object} - Theme and layout configuration object.
 */
export const defineThemeConfig = userConfig => {
  return {
    themeConfig: userConfig, // Assign user-defined configuration as theme configuration
    layoutConfig: {
      app: {
        title: userConfig.app.title, // Set application title from user configuration
        logo: userConfig.app.logo, // Set application logo from user configuration

        i18n: {
          enable: userConfig.app.i18n.enable, // Enable/disable internationalization based on user configuration
        },
        iconRenderer: userConfig.app.iconRenderer, // Set icon renderer from user configuration
      },

    },
  }
}
