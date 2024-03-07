// Import necessary plugins
import AutoImport from 'unplugin-auto-import/vite'; // Plugin for auto-importing dependencies
import Components from 'unplugin-vue-components/vite'; // Plugin for auto-registering Vue components
import Fonts from 'unplugin-fonts/vite'; // Plugin for importing fonts
import Layouts from 'vite-plugin-vue-layouts'; // Plugin for Vue layouts
import Vue from '@vitejs/plugin-vue'; // Official Vue plugin for Vite
import VueRouter from 'unplugin-vue-router/vite'; // Plugin for Vue Router
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'; // Plugin for Vuetify

import { VueRouterAutoImports, getPascalCaseRouteName } from 'unplugin-vue-router'; // Utilities for Vue Router

import VueDevTools from 'vite-plugin-vue-devtools'; // Plugin for Vue DevTools

// Import utility functions
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// Vite configuration
export default defineConfig({
  // Configure plugins
  plugins: [
    // Vue Router plugin
    VueRouter({
      // Function to get route names
      getRouteName: routeNode => {
        // Convert pascal case to kebab case
        return getPascalCaseRouteName(routeNode)
          .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
          .toLowerCase();
      },
    }),
    // Vue plugin
    Vue({
      // Transform asset URLs
      template: { transformAssetUrls }
    }),
    VueDevTools(), // Vue DevTools plugin
    // Vue layouts plugin
     // Docs: https://github.com/johncampionjr/vite-plugin-vue-layouts#vite-plugin-vue-layouts
     Layouts({
      layoutsDirs: './src/layouts/',
    }),

    // Vuetify plugin
    Vuetify({
      autoImport: true, // Enable auto-importing
      styles: {
        configFile: 'src/assets/styles/settings.scss', // Path to Vuetify styles config file
      },
    }),
    // Vue components plugin
    Components({
      dirs: ['src/@core/components', 'src/components'], // Directories to scan for Vue components
      dts: true, // Generate .d.ts files
    }),
    // Fonts plugin
    Fonts({
      google: {
        families: [{
          name: 'Poppins:ital',
          styles: 'wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        }],
      },
    }),
    // Auto import plugin
    AutoImport({
      imports: ['vue', VueRouterAutoImports, '@vueuse/core', '@vueuse/math', 'pinia'], // Additional imports
      dirs: [
        './src/@core/components',
        './src/@core/utils',
        './src/@core/composable/',
        './src/composables/',
        './src/utils/',
        './src/plugins/*/composables/*',
      ],
      // eslintrc: {
      //   enabled: true,
      // },
      vueTemplate: true, // Enable Vue template support
      // ℹ️ Disabled to avoid confusion & accidental usage
      ignore: ['useCookies', 'useStorage'],
    }),
  ],
  // Define global variables
  define: { 'process.env': {} },
  // Resolve configurations
  resolve: {
    // Aliases for module resolution
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@themeConfig': fileURLToPath(new URL('./themeConfig.js', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images/', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/assets/icons/', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
    },
    // File extensions to resolve
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  // Server configuration
  server: {
    port: 3500, // Port number
  },
  // Build configuration
  build: {
    chunkSizeWarningLimit: 5000, // Chunk size warning limit
  },
  // Optimization dependencies configuration
  optimizeDeps: {
    exclude: ['vuetify'], // Exclude specific dependencies
    entries: [
      './src/**/*.vue', // Vue files to include
    ],
  },
});
