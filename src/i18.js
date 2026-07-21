import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Hello, how are you?",
        text: "Lorem ipsum dolor sit amet..."
      }
    },
    ru: {
      translation: {
        title: "Привет, как дела?",
        text: "Лорем ипсум долор сит амет..."
      }
    },
    de: {
      translation: {
        title: "Hallo, wie geht es dir?",
        text: "Lorem ipsum dolor sit amet..."
      }
    },
    es: {
      translation: {
        title: "¿Hola, cómo estás?",
        text: "Lorem ipsum dolor sit amet..."
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
