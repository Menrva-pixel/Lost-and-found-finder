/* eslint-disable class-methods-use-this */
import AOS from 'aos';
import lostWallet from '../../../public/images/hero/bnr.png';
import 'aos/dist/aos.css';

class SiteDescriptionElement extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initializeAOS();
    this.handleScroll();
  }

  render() {
    this.innerHTML = `
      <div>
        <div class='desc-container' data-aos='fade-up'>
          <img src='${lostWallet}' alt="lost wallet">
          <div class="description">
            <h2>Lost & Found</h2>
            <p>Lost and Found Finder adalah sebuah website inovatif yang didedikasikan untuk membantu Anda menemukan barang-barang yang hilang dan melaporkan barang-barang yang telah hilang. Dengan antarmuka yang intuitif dan mudah digunakan, kami menyediakan platform yang efisien untuk mencari dan melacak barang-barang yang mungkin Anda kehilangan.</p>
          </div>
        </div>
      </div>
    `;
  }

  initializeAOS() {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
      once: false,
      mirror: true,
    });
  }

  handleScroll() {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > lastScrollTop;

      if (isScrollingDown) {
        AOS.refresh();
      }

      lastScrollTop = scrollTop;
    });
  }
}

customElements.define('site-description-element', SiteDescriptionElement);
