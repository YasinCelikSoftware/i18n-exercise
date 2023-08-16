import './App.css';
import {Trans, useTranslation} from 'react-i18next';
import Random from './components/Random';
import {useState} from 'react';

function App () {
  const {t, i18n} = useTranslation ();
  const [direction, setDirection] = useState ('ltr');

  const changeLanguage = language => {
    i18n.changeLanguage (language);
    if (language === 'ar') setDirection ('rtl');
    else {
      setDirection ('ltr');
    }
  };

  return (
    <div style={{direction: direction}}>
      <button onClick={() => changeLanguage ('tr')}>Türkçe</button>
      <button onClick={() => changeLanguage ('en')}>English</button>
      <button onClick={() => changeLanguage ('ar')}>عربي</button>
      <hr />
      <div>{t ('welcome')}</div>
      <h2>{t ('title-1')}</h2>
      <Random />
    </div>
  );
}

export default App;
