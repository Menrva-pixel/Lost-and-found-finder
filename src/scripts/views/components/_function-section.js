class findAndLost extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    const lostButton = this.querySelector('.lostButton button');
    const findButton = this.querySelector('.findButton button');

    lostButton.addEventListener('click', () => {
      window.location.hash = '#/lost-form';
    });

    findButton.addEventListener('click', () => {
      window.location.hash = '#/found-form';
    });
  }

  render() {
    this.innerHTML = `
        <div class="lostButton">
            <h2>KEHILANGAN BARANG</h2>
            <button>Buat Laporan</button>
        </div>

        <div class="findButton">
            <h2>MENEMUKAN BARANG</h2>
            <button>Buat Laporan</button>
        </div>
        
        `;
  }
}
customElements.define('function-section', findAndLost);
