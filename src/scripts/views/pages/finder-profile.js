/* eslint-disable no-plusplus */
import profilImg1 from '../../../public/images/img-missing.png';
import profilImg2 from '../../../public/images/question-img.png';
import profilImg3 from '../../../public/images/img-missing-2.png';

const Profile = {
  async render() {
    return `
    <h2 class="page-title">Kenali Peranmu!</h2>
        <div id="finder-profile">
            <div class="profile-card">
                <div class="profile-img">
                  <img src="${profilImg1}">
                  <h2>Finder</h2>
                 </div>
                 <div class="profile-info">
                    <h3>Finder</h3>
                    <p>Finder adalah seseorang yang menemukan barang yang hilang. Finder berperan penting dalam proses mencari dan mungkin mengembalikan barang yang hilang.</p>
                </div>
              </div>

              <div class="profile-card">
                <div class="profile-img">
                  <img src="${profilImg2}">
                  <h2>Helper</h2>
                </div>
               <div class="profile-info">
                  <h3>Helper</h3>
                  <p>Helper merujuk pada individu yang menawarkan bantuan atau dukungan kepada mereka yang membutuhkannya.
                  dalam konteks situs web ini, seorang helper bisa menjadi seseorang yang memberikan panduan, nasihat, atau bantuan praktis kepada penemu
                  dan pencari dalam upaya mereka untuk menemukan atau mendapatkan kembali barang yang hilang.</p>
              </div>
            </div>

            <div class="profile-card">
                <div class="profile-img">
                  <img src="${profilImg3}">
                  <h2>Seeker<h2>
                 </div>
                 <div class="profile-info">
                    <h3>Seeker</h3>
                    <p>Seeker adalah seseorang yang sedang aktif mencari barang yang hilang. Mereka mencari informasi
                    , sumber daya, atau layanan yang dapat membantu mereka dalam menemukan barang yang hilang. Pencari mengandalkan bantuan dan alat
                    yang disediakan oleh situs web untuk meningkatkan peluang mereka dalam menemukan barang yang hilang.</p>
                </div>
              </div>
         </div>
         <div class="warning-card">
            <div class="warning-card-content">
              <p>Penting untuk diingat bahwa peran finder, seeker, dan helper di situs web ini bertujuan untuk membantu proses penemuan dan pemulihan barang yang hilang. Namun, perlu diperhatikan bahwa setiap individu yang menggunakan situs ini bertanggung jawab atas tindakan dan keputusan mereka sendiri.</p><br>
              <p>Kami mengingatkan Anda untuk mematuhi undang-undang pencurian yang berlaku. Tindakan pencurian adalah ilegal dan melanggar hak milik orang lain. Kami tidak mendukung atau bertanggung jawab atas tindakan yang melanggar hukum.</p><br>
              <p>Dalam penggunaan situs ini, pengguna diharapkan untuk berperilaku dengan integritas dan bertindak sesuai dengan hukum yang berlaku. Jika Anda menemukan barang yang hilang, kami mendorong Anda untuk bekerja sama dengan pihak berwenang dan mengikuti prosedur yang sesuai untuk mengembalikan barang tersebut kepada pemiliknya.</p><br>
              <p>Kami tidak dapat memberikan nasihat hukum secara langsung. Jika Anda memiliki pertanyaan hukum atau kekhawatiran terkait pertanggungjawaban hukum, disarankan untuk berkonsultasi dengan ahli hukum yang berkualifikasi di wilayah Anda.</p>
            </div>
          </div>
      `;
  },

  async afterRender() {
  },
};

export default Profile;
