import React from 'react';
import { LanguageProvider } from '../../shared/04-context/language-provider';
import { Greeter } from './greeter';

const Translations = () => {
  return (
    <LanguageProvider>
      <Greeter />
    </LanguageProvider>
  );
};

export default Translations;
