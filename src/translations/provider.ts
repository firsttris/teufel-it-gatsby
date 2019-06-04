import { messages } from './messages';

const LANGUAGE = 'teufel-it-language-code';

export const getCurrentLanguage = () => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(LANGUAGE) || 'de';
  }
};

export const setCurrentLanguage = (lang: string) => {
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem(LANGUAGE, lang);
  }
};

export const getTranslatedLabel = (key: string, lang: string): string => {
  if (messages[lang] && messages[lang][key]) {
    return messages[lang][key];
  }
  return `key-not-found [${key}]`;
};

export const getTranslatedLabelOrKey = (key: string, lang: string): string => {
  if (messages[lang] && messages[lang][key]) {
    return messages[lang][key];
  }
  return key;
};
