import AOS from 'aos';
import 'aos/dist/aos.css';

class findAndLost extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
    this.initializeAOS();
    this.handleScroll();
  }

  addEventListeners() {
    const lostButton = this.querySelector('.lostButton button');
    const findButton = this.querySelector('.findButton button');

    lostButton.addEventListener('click', () => {
      window.location.hash = '#/lost-item-service';
    });

    findButton.addEventListener('click', () => {
      window.location.hash = '#/found-item-service';
    });
  }

  render() {
    this.innerHTML = `

    <div class="left-side" data-aos='fade-up'>
        <img src="images/question-img.png" alt="pointing guy">
        </div>
      </div>
      <div class="right-side" data-aos='fade-up'>
      <h2>Seeker ?</h2>
        <div class="lostButton">
            <p>Merasa kehilangan barang? coba buat laporan disini !!</p>
            <button class="btn-cari">Cari Barang</button>
        </div>
        <h2>Finder / Helper ?</h2>
        <div class="findButton">
            <p>Menemukan barang? laporkan penemuan disini !!</p>
            <button class="btn-lapor-penemuan">Lapor Penemuan</button>
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
customElements.define('function-section', findAndLost);
