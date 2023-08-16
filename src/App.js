import './App.css';
import {Trans, useTranslation} from 'react-i18next';
import Random from './components/Random';

function App () {
  const {t, i18n} = useTranslation ();

  const changeLanguage = language => {
    i18n.changeLanguage (language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage ('tr')}>Türkçe</button>
      <button onClick={() => changeLanguage ('en')}>English</button>
      <hr />
      <div>{t ('welcome')}</div>
      <h2>{t ('title-1')}</h2>
      <Random />
    </div>
  );
}

export default App;
