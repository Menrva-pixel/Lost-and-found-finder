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

    <div class="left-side">
        <img src="images/guy2.png" alt="pointing guy">
        </div>
      </div>
      <div class="right-side">
      <h2>Seeker?</h2>
        <div class="lostButton">
            <p>Merasa kehilangan barang? coba buat laporan disini !!</p>
            <button>Cari Barang</button>
        </div>
        <h2>Finder / Helper ?</h2>
        <div class="findButton">
            <p>Menemukan barang? laporkan penemuan disini !!</p>
            <button>Lapor Penemuan</button>
        </div>
        </div>
        `;
  }
}
customElements.define('function-section', findAndLost);