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

const About = {
	async render() {
		return `
        <h2 class ="About">About</h2>
        <div class="Latar">
            <p>
                Website ini dibuat untuk memenuhi tugas capstone project dari SIB Cycle 4 Dicoding Academy, bertemakan solusi utilitas dengan fitur pencarian dan penemuan barang hilang
                yang diharapkan dapat membantu masyarakat menemukan barang berharga yang hilang!.
            </p>
        </div>

        <div class="ourTeam">
            <h2>Our Team</h2>
            <div class="boxCard">
                <div class="profile">
                    <div class ="imageProfile">
                        <div class ="imageProfile">
                        <img src="${pictDev1}" alt="">
                    </div>
                    </div>
                    <h4>Mahendra</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>

                <div class="profile">
                    <div class ="imageProfile">
                        <img src="${pictDev1}" alt="">
                    </div>
                    <h4>Herdyanto</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>

                <div class="profile">
                    <div class ="imageProfile">
                        <img src="${pictDev1}" alt="">
                    </div>
                    <h4>Ibnu Hasyim</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>

                <div class="profile">
                    <div class ="imageProfile">
                        <img src="${pictDev1}" alt="">
                    </div>
                    <h4>Vicky</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="credit">
            <h2>Technology</h2>
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

export default About;
