import pictDev1 from '../../../public/images/dev/man-1.jpg';
import pictCreditHtml from '../../../public/images/credit/html5-logo.png';
import pictCreditCss from '../../../public/images/credit/css3-logo.png';
import pictCreditJavaScript from '../../../public/images/credit/javascript-logo.png';
import pictCreditBootstrap from '../../../public/images/credit/bootstrap-logo.png';
import pictCreditNodeJs from '../../../public/images/credit/node-js-logo.png';
import pictCreditGit from '../../../public/images/credit/git-logo.png';
import pictCreditGithub from '../../../public/images/credit/github-logo.png';
import pictCreditExpress from '../../../public/images/credit/express-logo.png';

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
                        <img src="${pictDev1}" alt="">
                    </div>
                    <div class="image-detail">
                        <h4>Mahendra</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        
                        <div class="social-media">
                        <a href="https://github.com/OmMahen"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/mahendra-putra-raharja/"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="profile">
                    <div class ="image-profile">
                        <img src="${pictDev1}" alt="">
                    </div>
                    <div class="image-detail">
                        <h4>Herdyanto</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        
                        <div class="social-media">
                        <a href="https://github.com/Menrva-pixel"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/barkah-herdyanto-sejati-636840258/"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="profile">
                    <div class ="image-profile">
                        <img src="${pictDev1}" alt="">
                    </div>
                    <div class="image-detail">
                        <h4>Ibnu Hasyim</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        
                        <div class="social-media">
                        <a href="https://github.com/IbnuHs"><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="profile">
                    <div class ="image-profile">
                        <img src="${pictDev1}" alt="">
                    </div>
                    <div class="image-detail">
                        <h4>Vicky</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        
                        <div class="social-media">
                        <a href="https://github.com/VickyPratama87"><i class="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/vicky-pratama/"><i class="bi bi-linkedin"></i></a>
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
                </div>

                <div class="credit-item">
                    <img src="${pictCreditCss}" alt="">
                </div>

                <div class="credit-item">
                    <img src="${pictCreditJavaScript}" alt="">
                </div>

                <div class="credit-item">
                    <img src="${pictCreditBootstrap}" alt="">
                </div>

                <div class="credit-item">
                    <img src="${pictCreditNodeJs}" alt="">
                </div>

                <div class="credit-item">
                    <img src="${pictCreditGit}" alt="">
                </div>

                <div class="credit-item">
                    <img src="${pictCreditGithub}" alt="">
                </div>

                <div class="credit-item">
                    <img src="${pictCreditExpress}" alt="">
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
