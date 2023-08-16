import React from 'react';
import {useTranslation} from 'react-i18next';

function Random () {
  const {t} = useTranslation ();
  return <div>{t ('random')}</div>;
}

export default Random;
