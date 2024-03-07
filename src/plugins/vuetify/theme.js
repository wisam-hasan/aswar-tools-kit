// Define static primary color
export const staticPrimaryColor = '#377EF9';

// Define light and dark themes
export const themes = {
  light: {
    dark: false, // Light theme is not dark
    colors: {
      'primary': staticPrimaryColor, // Primary color
      'on-primary': '#fff', // Color on primary
      'secondary': '#A8AAAE', // Secondary color
      'on-secondary': '#fff', // Color on secondary
      'success': '#28C76F', // Success color
      'on-success': '#fff', // Color on success
      'info': '#00CFE8', // Info color
      'on-info': '#fff', // Color on info
      'warning': '#FF9F43', // Warning color
      'on-warning': '#fff', // Color on warning
      'error': '#EA5455', // Error color
      'background': '#F8F7FA', // Background color
      'on-background': '#2F2B3D', // Color on background
      'surface': '#ffffff', // Color on surface
      'on-surface': '#2F2B3D', // Color on surface
      'grey-50': '#FAFAFA', // Grey 50
      'grey-100': '#F5F5F5', // Grey 100
      'grey-200': '#EEEEEE', // Grey 200
      'grey-300': '#E0E0E0', // Grey 300
      'grey-400': '#BDBDBD', // Grey 400
      'grey-500': '#9E9E9E', // Grey 500
      'grey-600': '#757575', // Grey 600
      'grey-700': '#616161', // Grey 700
      'grey-800': '#424242', // Grey 800
      'grey-900': '#212121', // Grey 900
      'perfect-scrollbar-thumb': '#DBDADE', // Perfect scrollbar thumb color
      'skin-bordered-background': '#fff', // Skin bordered background color
      'skin-bordered-surface': '#fff', // Skin bordered surface color
    },
    variables: {
      'code-color': '#d400ff', // Code color
      'overlay-scrim-background': '#4C4E64', // Overlay scrim background color
      'tooltip-background': '#4A5072', // Tooltip background color
      'overlay-scrim-opacity': 0.5, // Overlay scrim opacity
      'hover-opacity': 0.04, // Hover opacity
      'focus-opacity': 0.12, // Focus opacity
      'selected-opacity': 0.06, // Selected opacity
      'activated-opacity': 0.16, // Activated opacity
      'pressed-opacity': 0.14, // Pressed opacity
      'dragged-opacity': 0.1, // Dragged opacity
      'disabled-opacity': 0.42, // Disabled opacity
      'border-color': '#2F2B3D', // Border color
      'border-opacity': 0.16, // Border opacity
      'high-emphasis-opacity': 0.78, // High emphasis opacity
      'medium-emphasis-opacity': 0.68, // Medium emphasis opacity
      'switch-opacity': 0.2, // Switch opacity
      'switch-disabled-track-opacity': 0.3, // Switch disabled track opacity
      'switch-disabled-thumb-opacity': 0.4, // Switch disabled thumb opacity
      'switch-checked-disabled-opacity': 0.3, // Switch checked disabled opacity

      // Shadows
      'shadow-key-umbra-color': '#2F2B3D', // Shadow key umbra color
    },
  },
  dark: {
    dark: true, // Dark theme is dark
    colors: {
      'primary': staticPrimaryColor, // Primary color
      'on-primary': '#fff', // Color on primary
      'secondary': '#A8AAAE', // Secondary color
      'on-secondary': '#fff', // Color on secondary
      'success': '#28C76F', // Success color
      'on-success': '#fff', // Color on success
      'info': '#00CFE8', // Info color
      'on-info': '#fff', // Color on info
      'warning': '#FF9F43', // Warning color
      'on-warning': '#fff', // Color on warning
      'error': '#EA5455', // Error color
      'background': '#25293C', // Background color
      'on-background': '#D0D4F1', // Color on background
      'surface': '#2F3349', // Surface color
      'on-surface': '#D0D4F1', // Color on surface
      'grey-50': '#26293A', // Grey 50
      'grey-100': '#2F3349', // Grey 100
      'grey-200': '#26293A', // Grey 200
      'grey-300': '#4A5072', // Grey 300
      'grey-400': '#5E6692', // Grey 400
      'grey-500': '#7983BB', // Grey 500
      'grey-600': '#AAB3DE', // Grey 600
      'grey-700': '#B6BEE3', // Grey 700
      'grey-800': '#CFD3EC', // Grey 800
      'grey-900': '#E7E9F6', // Grey 900
      'perfect-scrollbar-thumb': '#4A5072', // Perfect scrollbar thumb color
      'skin-bordered-background': '#2f3349', // Skin bordered background color
      'skin-bordered-surface': '#2f3349', // Skin bordered surface color
    },
    variables: {
      'code-color': '#d400ff', // Code color
      'overlay-scrim-background': '#101121', // Overlay scrim background color
      'tooltip-background': '#5E6692', // Tooltip background color
      'overlay-scrim-opacity': 0.6, // Overlay scrim opacity
      'hover-opacity': 0.04, // Hover opacity
      'focus-opacity': 0.12, // Focus opacity
      'selected-opacity': 0.06, // Selected opacity
      'activated-opacity': 0.16, // Activated opacity
      'pressed-opacity': 0.14, // Pressed opacity
      'dragged-opacity': 0.1, // Dragged opacity
      'disabled-opacity': 0.42, // Disabled opacity
      'border-color': '#D0D4F1', // Border color
      'border-opacity': 0.16, // Border opacity
      'high-emphasis-opacity': 0.78, // High emphasis opacity
      'medium-emphasis-opacity': 0.68, // Medium emphasis opacity
      'switch-opacity': 0.4, // Switch opacity
      'switch-disabled-track-opacity': 0.4, // Switch disabled track opacity
      'switch-disabled-thumb-opacity': 0.8, // Switch disabled thumb opacity
      'switch-checked-disabled-opacity': 0.3, // Switch checked disabled opacity

      // Shadows
      'shadow-key-umbra-color': '#0F1422', // Shadow key umbra color
    },
  },
};

// Export themes
export default themes;
