class ServiceElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="services" class="services">
      <h1> Which one are you ? </h1>
      <div class="services-list">
        <ul>
          <li class="list-item1">
            <h2>Finder</h2>
            <p>Finder / Penemu adalah seseorang yang menemukan atau menemui suatu barang atau objek yang hilang. Mereka memainkan peran penting dalam proses mencari dan mungkin mengembalikan barang yang hilang kepada pemiliknya.</p>
          </li>
          <li class="list-item2">
            <h2>Helper</h2>
            <p>Helper merujuk pada individu yang menawarkan bantuan atau dukungan kepada mereka yang membutuhkannya. Dalam konteks situs web ini, seorang helper bisa menjadi seseorang yang memberikan panduan, nasihat, atau bantuan praktis kepada penemu dan pencari dalam upaya mereka untuk menemukan atau mendapatkan kembali barang yang hilang.</p>
          </li>
          <li class="list-item3">
            <h2>Seeker</h2>
            <p>Seeker / Pencari adalah seseorang yang sedang aktif mencari barang yang hilang atau hilang. Mereka mencari informasi, sumber daya, atau layanan yang dapat membantu mereka dalam menemukan barang yang hilang tersebut. Pencari mengandalkan bantuan dan alat yang disediakan oleh situs web untuk meningkatkan peluang mereka dalam menemukan barang yang hilang.</p>
          </li>
        </ul>
      </div>
      </div>
      `;
  }
}

customElements.define('service-element', ServiceElement);
