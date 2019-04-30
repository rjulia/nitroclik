import localization from "../../localization";

const InitialLanguageState = {
  language: localization.getLanguage()
}

export function SettingsReducer(state = InitialLanguageState, action) {
  switch (action.type) {
    case 'settings/getLanguage': {
      const lang = localization.getLanguage();
      return { ...state, language: lang }
    }

    case 'settings/setLanguage': {
      localization.setLanguage(action.payload.language)
      localStorage.setItem("language", action.payload.language)
      return { language: action.payload.language }
    }

    default:
      const language = localStorage.getItem('language') || localization.getLanguage()
      const supportedLanguage = () => {
        if ((language === 'en') || (language === 'zht')) {
          return language
        } else {
          return 'en'
        }
      }
      localization.setLanguage(supportedLanguage())
      return { ...state, language }
  }
}