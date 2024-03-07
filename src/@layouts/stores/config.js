import { useCookie } from '@/@core/composable/useCookie'
import { _setDirAttr } from '@layouts/utils'
import { watch, ref } from 'vue'
// ℹ️ We should not import themeConfig here but in urgency we are doing it for now
import { layoutConfig } from '@themeConfig'
import { defineStore } from 'pinia'

// Function to generate namespaced configuration key
export const namespaceConfig = str => `${layoutConfig.app.title}-${str}`

// Function to create a reactive reference to a cookie value
export const cookieRef = (key, defaultValue) => {
  return useCookie(namespaceConfig(key), { default: () => defaultValue })
}

// Define layout configuration store using Pinia
export const useLayoutConfigStore = defineStore('layoutConfig', () => {
  // Reactive reference for determining whether the application is in RTL mode
  const isAppRTL = ref(false)

  // Watch for changes in isAppRTL and update the direction attribute accordingly
  watch(isAppRTL, val => {
    _setDirAttr(val ? 'rtl' : 'ltr')
  })

  // Return the store properties and methods
  return {
    isAppRTL,
  }
})
