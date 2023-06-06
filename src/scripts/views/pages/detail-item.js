import ImgDetail from '../../../public/images/placeholder.png';

const DetailItems = {
  async render() {
    return `
        <div id="detail-item">
          <div class="detail-image">
            <img src="${ImgDetail}" alt="item-detail-img">
          </div>

          <div class="detail-information">
            <div class="detail-title">
              <h3>Hilang / Ditemukan Barang</h3>
            </div>

            <div class="detail-body">
              <div class="information-person">
                <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/person-male.png" alt="person-male"/>
                <p>Dipublish oleh : Nama</p>
              </div>
              <div class="information-time">
                <img width="20" height="20" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1"/>
                <p>12 Desember 2001</p>
              </div>
              <div class="information-place">
                <img width="20" height="20" src="https://img.icons8.com/ios/30/marker--v1.png" alt="marker--v1"/>
                <p>Lapangan Bola</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor massa odio, at congue quam hendrerit id. Aenean diam ipsum, ornare sed quam nec, pharetra lobortis est. Mauris eget consequat enim. Nam arcu nulla, sollicitudin nec mollis eget, euismod in justo. Nam euismod elit sed pretium pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div class="detail-function">
                <button>Hubungi pelapor</button>
              </div>
            </div>
          </div>
        </div>
     `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default DetailItems;
