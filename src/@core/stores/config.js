import { storeToRefs } from 'pinia'
import { useTheme } from 'vuetify'
import { cookieRef, useLayoutConfigStore } from '@layouts/stores/config'
import { themeConfig } from '@themeConfig'
import { usePreferredColorScheme } from '@vueuse/core'
import { defineStore } from 'pinia'
import { watch, onMounted } from 'vue'

// SECTION: Store
/**
 * Store for managing configuration settings.
 */
export const useConfigStore = defineStore('config', () => {
  // Theme
  const userPreferredColorScheme = usePreferredColorScheme()
  const cookieColorScheme = cookieRef('color-scheme', 'light')

  // Watch user preferred color scheme and update cookie
  watch(userPreferredColorScheme, val => {
    if (val !== 'no-preference')
      cookieColorScheme.value = val
  }, { immediate: true })

  // Retrieve theme and skin from cookies
  const theme = cookieRef('theme', themeConfig.app.theme)
  const skin = cookieRef('skin', themeConfig.app.skin)

  // Get isAppRTL from layout configuration store
  const { isAppRTL } = storeToRefs(useLayoutConfigStore())

  return {
    theme,
    skin,
    isAppRTL,
  }
})
// !SECTION

// SECTION: Init
/**
 * Initializes the configuration store.
 */
export const initConfigStore = () => {
  const userPreferredColorScheme = usePreferredColorScheme()
  const vuetifyTheme = useTheme()
  const configStore = useConfigStore()

  // Watch for changes in theme and user preferred color scheme
  watch([() => configStore.theme, userPreferredColorScheme], () => {
    vuetifyTheme.global.name.value = configStore.theme === 'system'
      ? userPreferredColorScheme.value === 'dark' ? 'dark' : 'light'
      : configStore.theme
  })

  // Set initial theme based on system theme if configured
  onMounted(() => {
    if (configStore.theme === 'system')
      vuetifyTheme.global.name.value = userPreferredColorScheme.value
  })
}
// !SECTION
