import { messages } from './messages';

enum LANGUAGES {
  de,
  en
}

const LANGUAGE = 'teufel-it-language-code';

export const getCurrentLanguage = () => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(LANGUAGE) || 'de';
  }
};

export const isEN = () => {
  return getCurrentLanguage() === 'en';
};

export const getTranslatedLabel = (key: string, language?: LANGUAGES): string => {
  const lang = language || getCurrentLanguage();

  if (messages[lang] && messages[lang][key]) {
    return messages[lang][key];
  }
  return `key-not-found [${key}]`;
};

export const getTranslatedLabelOrKey = (key: string, language?: LANGUAGES): string => {
  const lang = language || getCurrentLanguage();
  if (messages[lang] && messages[lang][key]) {
    return messages[lang][key];
  }
  return key;
};

export const setCurrentLanguage = (lang: string) => {
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.setItem(LANGUAGE, lang);
  }
};
