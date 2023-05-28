import { createLostItemCard } from '../template/template-creator';

class information extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2>Informasi Kehilangan</h2>
        <button id="scrollLeft"><i class="bi bi-caret-left-fill"></i></button>
        <div class="containerCard">
            ${createLostItemCard()}
            ${createLostItemCard()}
            ${createLostItemCard()}
            ${createLostItemCard()}
            ${createLostItemCard()}
        </div>
        <button id="scrollRight"><i class="bi bi-caret-right-fill"></i></button>
        <h3><a href="#/lost-items">Lihat Semua..</a></h3>

        `;
  }
}
customElements.define('information-section', information);
