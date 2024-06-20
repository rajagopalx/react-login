import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "sign_in": "Login",
      "email": "Email Address",
      "password": "Password",
      "login": "Login",
      "welcome": "Welcome to Home Page",
      "forgot_password": "Forgot password?",
    }
  },
  ta: {
    translation: {
      "sign_in": "உள்நுழை",
      "email": "மின்னஞ்சல்",
      "password": "கடவுச்சொல்",
      "login": "உள்நுழை",
      "welcome": "முகப்புப் பக்கத்திற்கு வரவேற்கிறோம்",
      "forgot_password": "கடவுச்சொல்லை மறந்துவிட்டேன்?",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;
