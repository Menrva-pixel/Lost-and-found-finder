import lostWallet from '../../../public/images/hero/bnr.png';

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
                <h2>Lost & Found</h2>
                <p>Lost and Found Finder adalah sebuah website inovatif yang didedikasikan untuk membantu Anda menemukan barang-barang yang hilang dan melaporkan barang-barang yang telah hilang. Dengan antarmuka yang intuitif dan mudah digunakan, kami menyediakan platform yang efisien untuk mencari dan melacak barang-barang yang mungkin Anda kehilangan.</p>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('site-description-element', SiteDescriptionElement);
