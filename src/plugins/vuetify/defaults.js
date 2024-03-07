export default {
  IconBtn: {
    icon: true, // Show icon
    color: 'default', // Default color
    variant: 'text', // Text variant
    density: 'comfortable', // Comfortable density
    VIcon: {
      size: 22, // Icon size
    },
  },
  VAlert: {
    density: 'comfortable', // Comfortable density
    VBtn: {
      color: undefined, // Button color undefined
    },
  },
  VAvatar: {
    // ℹ️ Remove after next release
    variant: 'flat', // Flat variant (remove in the next release)
  },

  // VImg: {
  //   eager: true,
  // },
  VBadge: {
    // Set v-badge default color to primary
    color: 'primary',
  },
  VBtn: {
    // Set v-btn default color to primary
    color: 'primary',
  },
  VChip: {
    size: 'small', // Small size for chips
  },
  VExpansionPanel: {
    expandIcon: 'tabler-chevron-right', // Expand icon
    collapseIcon: 'tabler-chevron-right', // Collapse icon
  },
  VExpansionPanelTitle: {
    expandIcon: 'tabler-chevron-right', // Expand icon
    collapseIcon: 'tabler-chevron-right', // Collapse icon
  },
  VList: {
    density: 'comfortable', // Comfortable density
    VCheckboxBtn: {
      density: 'compact', // Compact density for checkbox buttons
    },
  },
  VPagination: {
    activeColor: 'primary', // Primary color for active pagination
    density: 'comfortable', // Comfortable density
    variant: 'tonal', // Tonal variant
  },
  VTabs: {
    // Set v-tabs default color to primary
    color: 'primary',
    density: 'comfortable', // Comfortable density
    VSlideGroup: {
      showArrows: true, // Show arrows for slide group
    },
  },
  VTooltip: {
    // Set v-tooltip default location to top
    location: 'top',
  },
  VCheckboxBtn: {
    color: 'primary', // Primary color for checkbox buttons
  },
  VCheckbox: {
    // Set v-checkbox default color to primary
    color: 'primary',
    density: 'comfortable', // Comfortable density
    hideDetails: 'auto',
  },
  VRadioGroup: {
    color: 'primary', // Primary color for radio group
    density: 'comfortable', // Comfortable density
    hideDetails: 'auto',
  },
  VRadio: {
    density: 'comfortable', // Comfortable density
    hideDetails: 'auto',
  },
  VSelect: {
    variant: 'outlined', // Outlined variant
    color: 'primary', // Primary color
    density: 'compact', // Compact density
    hideDetails: 'auto',
    VChip: {
      color: 'primary', // Primary color for chips
      label: true, // Show label
    },
  },
  VRangeSlider: {
    // Set v-range-slider default color to primary
    color: 'primary',
    trackColor: 'rgb(var(--v-theme-on-surface),0.06)', // Track color
    trackSize: 6, // Track size
    thumbSize: 7, // Thumb size
    density: 'comfortable', // Comfortable density
    thumbLabel: true, // Show thumb label
    hideDetails: 'auto',
  },
  VRating: {
    // Set v-rating default color to primary
    color: 'warning',
  },
  VProgressCircular: {
    // Set v-progress-circular default color to primary
    color: 'primary',
  },
  VProgressLinear: {
    height: 12, // Height of progress bar
    roundedBar: true, // Rounded progress bar
    rounded: true, // Rounded corners
    color: 'primary', // Primary color
  },
  VSlider: {
    // Set v-slider default color to primary
    color: 'primary',
    trackColor: 'rgb(var(--v-theme-on-surface),0.06)', // Track color
    hideDetails: 'auto',
    thumbSize: 7, // Thumb size
    trackSize: 6, // Track size
  },
  VTextField: {
    variant: 'outlined', // Outlined variant
    density: 'compact', // Compact density
    color: 'primary', // Primary color
    hideDetails: 'auto',
  },
  VAutocomplete: {
    variant: 'outlined', // Outlined variant
    color: 'primary', // Primary color
    density: 'compact', // Compact density
    hideDetails: 'auto',
    menuProps: {
      contentClass: 'app-autocomplete__content v-autocomplete__content', // Custom menu content class
    },
    VChip: {
      color: 'primary', // Primary color for chips
      label: true, // Show label
    },
  },
  VCombobox: {
    variant: 'outlined', // Outlined variant
    density: 'compact', // Compact density
    color: 'primary', // Primary color
    hideDetails: 'auto',
    VChip: {
      color: 'primary', // Primary color for chips
      label: true, // Show label
    },
  },
  VFileInput: {
    variant: 'outlined', // Outlined variant
    density: 'compact', // Compact density
    color: 'primary', // Primary color
    hideDetails: 'auto',
  },
  VTextarea: {
    variant: 'outlined', // Outlined variant
    density: 'compact', // Compact density
    color: 'primary', // Primary color
    hideDetails: 'auto',
  },
  VSwitch: {
    // Set v-switch default color to primary
    inset: true, // Inset switch
    color: 'primary', // Primary color
    hideDetails: 'auto',
  },
  VTimeline: {
    lineThickness: 1, // Line thickness
  },
  VDataTable: {
    VDataTableFooter: {
      VBtn: {
        density: 'comfortable', // Comfortable density
        color: 'default', // Default button color
      },
    },
  },
};
