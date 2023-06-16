import AOS from 'aos';
import 'aos/dist/aos.css';

import srcImg1 from '../../../public/images/img-missing-1.jpg';
import srcImg2 from '../../../public/images/img-finder-2.jpg';
import srcImg3 from '../../../public/images/missing-item-2.jpg';

class ServiceElement extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initializeAOS();
    this.handleScroll();
  }

  render() {
    this.innerHTML = `
      <div id="services" class="services" data-aos='fade-up'>
        <h1> Siapakah Kamu ? </h1>
        <div class="services-list">
          <div class="service-item1">
              <img src="${srcImg1}" alt="man and women with big question mark in the middle">
              <a href="#/finder-profile" class="role-title">Finder</a>
              <p class="role-desc">Menemukan barang milik orang lain ?</p>
          </div>

          <div class="service-item2">
            <img src="${srcImg2}" alt="a man pointing at search button">
            <a href="#/finder-profile" class="role-title">Helper</a>
            <p class="role-desc">Ingin menolong orang mencari atau<br> menemukan barang yang hilang ?</p>
          </div>

          <div class="service-item3">
            <img src="${srcImg3}" alt="a man shrugging">
            <a href="#/finder-profile" class="role-title">Seeker</a>
            <p class="role-desc">Kamu merasa kehilangan barang ?</p>
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

customElements.define('service-element', ServiceElement);
