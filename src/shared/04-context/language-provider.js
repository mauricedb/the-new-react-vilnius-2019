import React, { useState } from 'react';
import { LanguageContext } from './language-context';
const greetings = { nl: 'Goedemorgen', en: 'Good morning' };

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('nl');
  return (
    <div>
      <LanguageContext.Provider value={greetings[locale]}>
        <select onChange={e => setLocale(e.target.value)} autoFocus>
          <option value="nl" selected={locale === 'nl'}>
            Nederlands
          </option>
          <option value="en" selected={locale === 'en'}>
            Engels
          </option>
        </select>
        {children}
      </LanguageContext.Provider>
    </div>
  );
};
