import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationAR from '../locales/ar/translation.json';


const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  ar: { translation: translationAR }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

  // Set document language and direction (RTL/LTR) based on current locale
  function setDocumentDirection(lng) {
    if (typeof document === 'undefined') return;
    const dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    document.documentElement.dir = dir;
  }

  setDocumentDirection(i18n.language || 'fr');

  // Keep document direction in sync when language changes at runtime
  i18n.on('languageChanged', (lng) => {
    setDocumentDirection(lng);
  });

  export default i18n;
