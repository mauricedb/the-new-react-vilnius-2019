import React, { useContext } from 'react';
import { LanguageContext } from '../../shared/04-context/language-context';

export const Greeter = () => {
  const greeting = useContext(LanguageContext);

  return <div>{greeting}</div>;
};
