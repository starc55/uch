import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./locales/resources";

const storageKey = "uch-language";
const savedLanguage =
  typeof window !== "undefined"
    ? window.localStorage.getItem(storageKey)
    : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || "uz",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

if (typeof window !== "undefined") {
  i18n.on("languageChanged", (language) => {
    window.localStorage.setItem(storageKey, language);
  });
}

export default i18n;
