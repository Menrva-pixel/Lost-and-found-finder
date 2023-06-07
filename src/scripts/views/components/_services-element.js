/* eslint-disable import/no-duplicates */
import srcImg1 from '../../../public/images/img-missing-1.jpg';
import srcImg2 from '../../../public/images/img-finder-2.jpg';
import srcImg3 from '../../../public/images/missing-item-2.jpg';

class ServiceElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="services" class="services">
        <h1> Siapakah Kamu ? </h1>
        <div class="services-list">
          <div class="service-item1">
              <img src="${srcImg1}">
              <a href="#" class="role-title">Finder</a>
              <p class="role-desc">Menemukan barang milik orang lain ?</p>
          </div>

          <div class="service-item2">
            <img src="${srcImg2}">
            <a href="#" class="role-title">Helper</a>
            <p class="role-desc">Ingin menolong orang mencari atau<br> menemukan barang yang hilang ?</p>
          </div>

          <div class="service-item3">
            <img src="${srcImg3}">
            <a href="#" class="role-title">Seeker</a>
            <p class="role-desc">Kamu merasa kehilangan barang ?</p>
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define('service-element', ServiceElement);
