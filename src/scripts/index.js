import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/search-bar.css';
import './views/components/_hero-element';
import App from './views/app';

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
