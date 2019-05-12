import React, { useState } from 'react';
import { LanguageContext } from './language-context';

const greetings = { nl: 'Goedemorgen', en: 'Good morning', lt: 'Geras rytas' };

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  return (
    <div>
      <LanguageContext.Provider value={greetings[locale]}>
        <select onChange={e => setLocale(e.target.value)} autoFocus>
          <option value="en" selected={locale === 'en'}>
            Engels
          </option>
          <option value="lt" selected={locale === 'lt'}>
            Lithuanian
          </option>
          <option value="nl" selected={locale === 'nl'}>
            Nederlands
          </option>
        </select>
        {children}
      </LanguageContext.Provider>
    </div>
  );
};
