import pictVicky from '../../../public/images/dev/profile-vicky.png';
import pictIbnu from '../../../public/images/dev/profile-ibnu.png';
import pictMahen from '../../../public/images/dev/profile-mahen.jpg';
import pictBarkah from '../../../public/images/dev/profile-barkah.png';
import pictCreditHtml from '../../../public/images/credit/html5-logo.png';
import pictCreditCss from '../../../public/images/credit/css3-logo.png';
import pictCreditJavaScript from '../../../public/images/credit/javascript-logo.png';
import pictCreditBootstrap from '../../../public/images/credit/bootstrap-logo.png';
import pictCreditNodeJs from '../../../public/images/credit/node-js-logo.png';
import pictCreditGit from '../../../public/images/credit/git-logo.png';
import pictCreditGithub from '../../../public/images/credit/github-logo.png';
import pictCreditExpress from '../../../public/images/credit/express-logo.png';
import pictCreditPostgree from '../../../public/images/credit/postgresql-logo.png';
import pictCreditNeon from '../../../public/images/credit/neon-log.png';
import pictCreditVercel from '../../../public/images/credit/vercel-logo.png';
import pictCreditPostman from '../../../public/images/credit/postman-logo.png';

import '../components/_sponsor-section';

const about = {
  async render() {
    return `
        <h2 class ="about">About</h2>
        <hr class="line-about"/>
        <div class="latar">
            <p>
                Website ini dibuat untuk memenuhi tugas Capstone Project dari SIB Cycle 4 Dicoding Academy, yang bertemakan solusi utilitas dengan fitur pencarian dan penemuan barang yang hilang sehingga dapat membantu masyarakat menemukannya kembali.
            </p>
            <p>
                Kami juga memberikan fitur pelaporan kehilangan barang, di mana Anda dapat mengunggah foto, memberikan deskripsi yang rinci, dan memasukkan informasi penting seperti lokasi kehilangan, waktu kehilangan, dan kontak yang dapat dihubungi.
            </p>
            <p>
                Informasi ini akan membantu orang lain yang menemukan barang yang hilang untuk menghubungi Anda dan mengembalikannya dengan mudah.
            </p>
        </div>

        <div class="our-team">
            <h2>Our Team</h2>
            <hr class="line-our-team"/>
            <div class="box-card">
                <div class="profile">
                    <div class ="image-profile">
                        <img src="${pictMahen}" alt="dev-pic1">
                    </div>
                    <div class="image-detail">
                        <h4>Mahendra</h4>
                        <p>Mahasiswa Universitas Mataram, Fakultas Teknik, Jurusan Teknik Informatika</p>
                        <p>"<i>Our team's collaboration created an impressive capstone project that I'm sure will outshine the rest.</i>"</p>
                        <div class="social-media">
                        <a href="https://github.com/OmMahen" target="_blank"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/mahendra-putra-raharja/" target="_blank"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="profile">
                    <div class ="image-profile">
                        <img src="${pictBarkah}" alt="dev-pic2">
                    </div>
                    <div class="image-detail">
                        <h4>Herdyanto</h4>
                        <p>Mahasiswa Ilmu Komputer Fakultas Teknologi Informasi Universitas Bina Sarana Informatika</p>
                        <p>"<i>Time is a great tailor, stitching the fabric of our lives with threads of experience. In the passing seconds, time dilation teaches us the importance of cherishing every precious moment in our lives.</i>"</p>
                        
                        <div class="social-media">
                        <a href="https://github.com/Menrva-pixel" target="_blank"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/barkah-herdyanto-sejati-636840258/" target="_blank"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="profile">
                    <div class ="image-profile">
                        <img src="${pictIbnu}" alt="dev-pic3">
                    </div>
                    <div class="image-detail">
                        <h4>Ibnu Hasyim</h4>
                        <p>Saya Mahasiswa Universitas Muslim Indonesia Makassar, Fakultas Ilmu Komputer Jurusan Teknik Informatika.
                        Saat ini sedang fokus mempelajari tentang pengembangan Front End Web Developer.</p>
                        <p>"<i>Error is Our Friend</i>"</p>
                        
                        <div class="social-media">
                        <a href="https://github.com/IbnuHs" target="_blank"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/ibnu-hasyim-surianto-277b84241/" target="_blank"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="profile">
                    <div class ="image-profile">
                        <img src="${pictVicky}" alt="dev-pic4">
                    </div>
                    <div class="image-detail">
                        <h4>Vicky</h4>
                        <p>Universitas Negeri Surabaya, Fakultas Teknik, Jurusan Teknik Informatika
                        </p>

                        <p>"<i>So with IT in the world 5.0, the development is so fast for a Technologist how he adapts and deals with the problem with current developments.</i>"</p>
                        
                        <div class="social-media">
                        <a href="https://github.com/VickyPratama87" target="_blank"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/vicky-pratama/" target="_blank"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="credit">
            <h2>Technology</h2>
            <hr class="line-credit"/>
            <div class="credit-list">
                <div class="credit-item">
                    <img src="${pictCreditHtml}" alt="">
                    <h6>HTML</h6>
                </div>

                <div class="credit-item">
                    <img src="${pictCreditCss}" alt="">
                    <h6>CSS</h6>
                </div>

                <div class="credit-item">
                    <img src="${pictCreditJavaScript}" alt="">
                    <h6>JavaScript</h6>
                </div>

                <div class="credit-item">
                    <img src="${pictCreditBootstrap}" alt="">
                    <h6>Bootstrap</h6>
                </div>

                <div class="credit-item">
                    <img src="${pictCreditNodeJs}" alt="">
                    <h6>Node Js</h6>
                </div>

                <div class="credit-item">
                    <img src="${pictCreditGit}" alt="">
                    <h6>Git</h6>
                </div>

                <div class="credit-item Github">
                    <img src="${pictCreditGithub}" alt="">
                    <h6>Github</h6>
                </div>

                <div class="credit-item express">
                    <img src="${pictCreditExpress}" alt="">
                    <h6>Express Js</h6>
                </div>

                <div class="credit-item express">
                    <img src="${pictCreditNeon}" alt="">
                    <h6>Neon Tech</h6>
                </div>

                <div class="credit-item express">
                    <img src="${pictCreditPostgree}" alt="">
                    <h6>Postgre SQL</h6>
                </div>

                <div class="credit-item express">
                    <img src="${pictCreditVercel}" alt="">
                    <h6>Vercel</h6>
                </div>

                <div class="credit-item express">
                    <img src="${pictCreditPostman}" alt="">
                    <h6>Postman</h6>
                </div>
            </div>
        </div>
            <sponsor-section></sponsor-section>
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default about;
