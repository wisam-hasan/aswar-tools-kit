import { useStorage } from '@vueuse/core'
import { useTheme } from 'vuetify'
import { useConfigStore } from '@core/stores/config'
import { cookieRef, namespaceConfig } from '@layouts/stores/config'
import { themeConfig } from '@themeConfig'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

// Function to synchronize the application's direction (RTL/LTR) based on the selected language
const _syncAppRtl = () => {
  const configStore = useConfigStore() // Access the configuration store
  const storedLang = cookieRef('language', null) // Get the stored language from cookie
  const { locale } = useI18n({ useScope: 'global' }) // Access the global locale

  // Handle case where i18n can't read persisted value
  if (locale.value !== storedLang.value && storedLang.value)
    locale.value = storedLang.value

  // Watch and change lang attribute of HTML on language change
  watch(locale, val => {
    // Update lang attribute of HTML tag
    if (typeof document !== 'undefined')
      document.documentElement.setAttribute('lang', val)

    // Store selected language in cookie
    storedLang.value = val

    // Set isAppRtl value based on selected language
    if (themeConfig.app.i18n.langConfig && themeConfig.app.i18n.langConfig.length) {
      themeConfig.app.i18n.langConfig.forEach(lang => {
        if (lang.i18nLang === storedLang.value)
          configStore.isAppRTL = lang.isRTL
      })
    }
  }, { immediate: true })
}

// Function to handle changes in the application's skin
const _handleSkinChanges = () => {
  const { themes } = useTheme() // Access the themes from Vuetify
  const configStore = useConfigStore() // Access the configuration store

  // Create skin default color to revert back to original color when switching skins
  Object.values(themes.value).forEach(t => {
    t.colors['skin-default-background'] = t.colors.background
    t.colors['skin-default-surface'] = t.colors.surface
  })

  // Watch for changes in the selected skin and adjust background and surface colors
  watch(() => configStore.skin, val => {
    Object.values(themes.value).forEach(t => {
      t.colors.background = t.colors[`skin-${val}-background`]
      t.colors.surface = t.colors[`skin-${val}-surface`]
    })
  }, { immediate: true })
}

// Function to synchronize the initial loader's theme with the current theme's surface color
const _syncInitialLoaderTheme = () => {
  const vuetifyTheme = useTheme() // Access the current theme from Vuetify

  // Watch for changes in the selected theme and update the initial loader's background color
  watch(() => useConfigStore().theme, () => {
    useStorage(namespaceConfig('initial-loader-bg'), null).value = vuetifyTheme.current.value.colors.surface
    useStorage(namespaceConfig('initial-loader-color'), null).value = vuetifyTheme.current.value.colors.primary
  }, { immediate: true })
}

// Function to initialize core functionalities of the application
const initCore = () => {
  _syncInitialLoaderTheme() // Synchronize initial loader's theme
  _handleSkinChanges() // Handle changes in the application's skin

  // Trigger language synchronization if i18n is enabled
  if (themeConfig.app.i18n.enable)
    _syncAppRtl()
}

export default initCore
