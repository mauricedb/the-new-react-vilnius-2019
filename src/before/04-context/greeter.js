import React from 'react';
import { LanguageContext } from '../../shared/04-context/language-context';

export const Greeter = () => {
  return (
    <LanguageContext.Consumer>
      {greeting => <div>{greeting}</div>}
    </LanguageContext.Consumer>
  );
};
