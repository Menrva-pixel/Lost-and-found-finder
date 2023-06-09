/* eslint-disable no-empty-function */
import '../components/_found-form';

import bgImg from '../../../public/images/img-finder.png';
import onSubmitFoundForm from '../../utils/found-form-handler';

const FoundItemService = {
  async render() {
    return `
    <div class="hero">
      <div class="hero-text">
        <h3>Halo!</h3>
        <h1>Menemukan Barang?</h1>
        <p>Laporkan penemuan mu disini, agar sang pemilik dapat menemukan barangnya!</p>
      </div>
      <div class="bg-image">
        <img src="${bgImg}" alt="Hero Image">
      </div>
    </div>
    <div id="information-section">
        <p>Harap pastikan untuk membaca dan memahami <b>Syarat dan Ketentuan</b> website kami guna menghindari penggunaan yang tidak tepat atau melanggar prosedur. Setelah Anda memahami syarat dan ketentuan tersebut, silakan manfaatkan fitur-fitur website kami sebaik mungkin. Kami berharap dengan tulus agar barang-barang yang hilang segera ditemukan dan dikembalikan kepada pemiliknya. Terima kasih atas kerjasamanya!</p>
    </div>
    <div id="form-section">
      <found-form></found-form>
    </div>
    `;
  },

  async afterRender() {
    const submitButton = document.querySelector('.submit-btn button');
    submitButton.addEventListener('click', onSubmitFoundForm);
  },
};
export default FoundItemService;
