"use client";

import Cookies from "js-cookie";
import {
  cookieName,
  availableLanguages,
  defaultLanguage,
} from "@/app/i18n/settings";

export const LanguageSwitcher = ({ currentLanguage = defaultLanguage }) => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLocale = event.target.value;
    Cookies.set(cookieName, newLocale);
    window.location.href = "/";
  };

  return (
    <select
      value={currentLanguage}
      onChange={handleLanguageChange}
      className="text-black"
    >
      {availableLanguages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
