import 'regenerator-runtime';
/* main CSS file */
import '../styles/style.css';
import '../styles/app-bar.css';
import '../styles/menu-button.css';
import '../styles/search-bar.css';
import '../styles/credit.css';
/*  components CSS */
import '../styles/_banner.css';
import '../styles/_form.css';
import '../styles/_sponsor.css';
import '../styles/_services.css';
import '../styles/_modal.css';

import '../styles/responsive.css';

import './views/components/_hero-element';
import App from './views/app';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
