import { messages } from './messages';

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
