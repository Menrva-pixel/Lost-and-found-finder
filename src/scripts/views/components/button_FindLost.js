class findAndLost extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
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