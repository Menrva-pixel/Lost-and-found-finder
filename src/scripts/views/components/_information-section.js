/* eslint-disable class-methods-use-this */
import LostAndFoundAPI from '../../data/lost-and-found-api';
import { createLostItemCard } from '../template/template-creator';

class information extends HTMLElement {
  connectedCallback() {
    this.render();
    this.afterRender();
  }

  render() {
    this.innerHTML = `
        <h2>Informasi Barang Hilang</h2>
        <button id="scrollLeft"><i class="bi bi-caret-left-fill"></i></button>
        <div class="containerCard">
        </div>
        <button id="scrollRight"><i class="bi bi-caret-right-fill"></i></button>
        <h3><a href="#/list-item-service">Lihat Semua...</a></h3>
        `;
  }

  async afterRender() {
    const items = await LostAndFoundAPI.itemList();
    let mostRecent;
    if (items.length >= 5) {
      mostRecent = items.slice(-5).reverse();
    } else {
      mostRecent = items.reverse();
    }

    const itemContainer = document.querySelector('.containerCard');

    mostRecent.forEach((item) => {
      itemContainer.innerHTML += createLostItemCard(item);
    });
  }
}
customElements.define('information-section', information);
