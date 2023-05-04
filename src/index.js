import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';

import messages_en from './translations/en.json'
import messages_es from './translations/es.json'

const messages = {
  es: messages_es,
  en: messages_en,
}

let defaultLanguage = 'en'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider
  locale={localStorage.getItem('locale') || defaultLanguage}
  messages={messages[localStorage.getItem('locale') || defaultLanguage]}
>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
