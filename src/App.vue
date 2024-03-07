<script setup>
// Import necessary functions and modules
import { useTheme } from 'vuetify'; // Function to use Vuetify theme
import initCore from '@core/initCore'; // Function to initialize core functionality
import { initConfigStore, useConfigStore } from '@core/stores/config'; // Functions to initialize and use config store
import { hexToRgb } from '@layouts/utils'; // Function to convert hex color to RGB

// Use Vuetify theme
const { global } = useTheme();

// ℹ️ Sync current theme with initial loader theme
initCore(); // Initialize core functionality
initConfigStore(); // Initialize config store

// Get config store
const configStore = useConfigStore();
</script>

<template>
  <!-- Vuetify Locale Provider with RTL support -->
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <!-- Vuetify App component with dynamic inline style to set background color based on theme -->
    <VApp class="w-full h-screen font-poppins" :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <!-- Router View to render the current route component -->
      <RouterView />
    </VApp>
  </VLocaleProvider>
</template>
