export function getLanguage() {
  return {
    type: 'settings/getLanguage'
  }
}

export function setLanguage(language) {
  return {
    payload: {
      language
    },
    type: 'settings/setLanguage'
  }
}