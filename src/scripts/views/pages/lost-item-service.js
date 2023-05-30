/* eslint-disable no-empty-function */
import '../components/_lost-form';

import bgImg from '../../../public/images/img-finder.jpg';

const LostItemService = {
  async render() {
    return `
    <div class="hero">
    <div class="hero-text">
       <h3>Halo!</h3>
      <h1>Kehilangan Barang?</h1>
      <p>Buat laporan agar orang lain atau finder dapat menemukan barang mu yang hilang!</p>
    </div>
    <div class="bg-image">
      <img src="${bgImg}" alt="Hero Image">
    </div>
  </div>
 <div id="information-section">
    <p>Jangan lupa untuk membaca syarat dan ketentuan website kami untuk menghindari penggunaan yang tidak sesuai dengan prosedur<br>Jika sudah memahai syarat dan ketentuan silahkan gunakan fitur website kami sebaik mungkin
    Semoga barang yang hilang cepat ditemukan kembali!</p>
 </div>
  <div id="form-section">
    <lost-form></lost-form>
    </div>
    `;
  },

  async afterRender() {
  },
};
export default LostItemService;
