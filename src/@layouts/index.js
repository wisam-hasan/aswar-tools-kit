import { layoutConfig } from '@layouts/config'
import { cookieRef, useLayoutConfigStore } from '@layouts/stores/config'
import { _setDirAttr } from '@layouts/utils'

// 🔌 Plugin
export const createLayouts = userConfig => {
  return () => {
    const configStore = useLayoutConfigStore()


    // Non reactive Values
    layoutConfig.app.title = userConfig.app?.title ?? layoutConfig.app.title
    layoutConfig.app.logo = userConfig.app?.logo ?? layoutConfig.app.logo

    layoutConfig.app.i18n.enable = userConfig.app?.i18n?.enable ?? layoutConfig.app.i18n.enable
    layoutConfig.app.iconRenderer = userConfig.app?.iconRenderer ?? layoutConfig.app.iconRenderer


    // Reactive Values (Store)
    configStore.$patch({


      // isAppRTL: userConfig.app?.isRTL ?? config.app.isRTL,
      isLessThanOverlayNavBreakpoint: false,

    })

    // _setDirAttr(config.app.isRTL ? 'rtl' : 'ltr')
    _setDirAttr(configStore.isAppRTL ? 'rtl' : 'ltr')
  }
}
export * from './components'
export { layoutConfig }
