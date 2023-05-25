import lostWallet from '../../../public/images/lost-wallet.jpg';

class SiteDescriptionElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div>
        <div class='desc-container'>
            <img src='${lostWallet}' alt="lost wallet">
            <div class="description">
                <h2>Lost & Found Finder</h2>
                <p>"Lost and Found Finder" adalah platform online untuk melaporkan dan mencari barang hilang atau ditemukan. menemukan kembali barang hilang dengan efisien, mengurangi kejahatan pencurian, dan menjadi sumber data untuk penelitian. Partisipasi masyarakat sangat penting, perlu promosi dan edukasi yang baik untuk keberhasilan platform ini.</p>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('site-description-element', SiteDescriptionElement);
