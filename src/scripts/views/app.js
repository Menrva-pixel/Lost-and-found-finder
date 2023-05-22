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
    await page.afterRender();
  }
}

window.addEventListener('scroll', () => {
  const appBar = document.querySelector('.app-bar');
  const navigationLinks = document.querySelectorAll('.app-bar__navigation ul li a');
  const scrolled = window.scrollY > 0;

  appBar.classList.toggle('app-bar--scrolled', scrolled);

  navigationLinks.forEach((link) => {
    link.classList.toggle('a--scrolled', scrolled);
  });
});

window.addEventListener('scroll', () => {
  const parallaxBg = document.querySelector('.parallax-bg');
  const scrolled = window.pageYOffset;
  parallaxBg.style.transform = `translateY(${scrolled * 0.4}px)`;
});

export default App;
