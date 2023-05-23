import createLostItemCard from '../template/template-creator';

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
            <div class="more-icon-container">
                <a href="#/lost-items"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/circled-right-2.png" alt="circled-right-2"/><a>
            </div>
        </div>
        `;
  }
}
customElements.define('information-section', information);
