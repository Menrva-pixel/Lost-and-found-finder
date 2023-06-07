/* eslint-disable no-nested-ternary */
import LostAndFoundAPI from '../../data/lost-and-found-api';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';

const DetailItems = {
  async render() {
    return `
        <div id="detail-item">

        </div>
        <div class="detail-function">
          <p> Silahkan hubungi kontak yang tertera diatas, pastikan anda dapat membuktikan kepemilikan barang tersebut.<br>
          Kehilangan, dan pencurian bukan tanggung jawab kami, jika masih tidak ada tanggapan<br>
          silahkan hubungin pihak berwajib untuk menindak lanjuti.</p>   
        </div>
     `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const item = await LostAndFoundAPI.item(url.id);
    const detailContainer = document.querySelector('#detail-item');
    detailContainer.innerHTML = `
      <div class="detail-image">
        <img src="${CONFIG.BASE_IMAGE_URL}${item.iditem_image}" alt="item-detail-img">
      </div>

      <div class="detail-information">
        <div class="detail-title">
          <h3>${item.status === 'lost' ? 'Lost Item' : item.status === 'found' ? 'Found Item' : item.status}</h3>
        </div>
        <div class="detail-body">
          <div class="information-person">
            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/person-male.png" alt="person-male"/>
            <p>Dipublish oleh : ${item.user_name}</p>
          </div>
          <div class="information-time">
            <img width="20" height="20" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1"/>
            <p>Tanggal : ${new Date(item.item_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
          <div class="information-place">
            <img width="20" height="20" src="https://img.icons8.com/ios/30/marker--v1.png" alt="marker--v1"/>
            <p>Lokasi : ${item.item_location}</p>
          </div>
          <div class="information-email">
            <img width="20" height="20" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/external-at-mail-dreamstale-lineal-dreamstale-2.png" alt="external-at-mail-dreamstale-lineal-dreamstale-2" alt="marker--v1"/>
            <p>Email : ${item.user_email}</p>
          </div>
          <div class="information-phone">
            <img width="20" height="20" src="https://img.icons8.com/carbon-copy/100/phone.png" alt="marker--v1"/>
            <p>Number : ${item.user_phone}</p>
          </div>
          <p>Detail Informasi :</p>
          <p>${item.item_description}</p>
          <div class="logo-filler">
            <img src="icon.png">
          </div>
        </div>
      </div>
    `;
  },
};

export default DetailItems;
