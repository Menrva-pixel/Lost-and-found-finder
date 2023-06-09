/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    await page.afterRender();
  }
}

window.addEventListener('scroll', () => {
  const appBar = document.querySelector('.app-bar');
  const navigationLinks = document.querySelectorAll('.app-bar__navigation ul li a');
  const spans = document.querySelectorAll('#hamburgerButton span');

  const scrolled = window.scrollY > 0;

  appBar.classList.toggle('app-bar--scrolled', scrolled);

  spans.forEach((span) => {
    span.classList.toggle('span--scrolled', scrolled);
  });

  navigationLinks.forEach((link) => {
    link.classList.toggle('a--scrolled', scrolled);
  });
});

window.onscroll = () => { scrollFunction(); };

function scrollFunction() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.pointerEvents = 'auto';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.pointerEvents = 'none';
  }
}

document.getElementById('backToTopBtn').style.transition = 'opacity 0.3s ease';

document.getElementById('backToTopBtn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

/* hamburger auto close when resize to desktop */

window.addEventListener('resize', () => {
  const navigationDrawer = document.getElementById('navigationDrawer');
  const hamburgerButton = document.getElementById('hamburgerButton');

  if (window.innerWidth >= 767) {
    navigationDrawer.classList.remove('open');
    hamburgerButton.classList.remove('open');
  }
});

export default App;
