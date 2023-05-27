import { createLostItemCard } from '../template/template-creator';

class information extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2>Informasi Kehilangan</h2>
        <div class="containerCard">
            ${createLostItemCard()}
            ${createLostItemCard()}
            ${createLostItemCard()}
            ${createLostItemCard()}
            ${createLostItemCard()}
        </div>
        <h3><a href="#/lost-items">Lihat Semua..</a></h3>

        `;
  }
}
customElements.define('information-section', information);
