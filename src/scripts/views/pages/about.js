import pictIcon from '../../../public/icon.png';
import pictCreditHtml from '../../../public/images/credit/html5-logo.png';
import pictCreditCss from '../../../public/images/credit/css3-logo.png';
import pictCreditJavaScript from '../../../public/images/credit/javascript-logo.png';
import pictCreditBootstrap from '../../../public/images/credit/bootstrap-logo.png';
import pictCreditNodeJs from '../../../public/images/credit/node-js-logo.png';
import pictCreditGit from '../../../public/images/credit/git-logo.png';
import pictCreditGithub from '../../../public/images/credit/github-logo.png';
import pictCreditExpress from '../../../public/images/credit/express-logo.png';

const About = {
  async render() {
    return `
        <h2 class ="About">About</h2>
        <div class="Latar">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut in possimus minus earum tenetur quo. Consequuntur cumque ullam, porro alias nihil corporis mollitia, necessitatibus dolor odio, sed culpa dolores. Optio dolorem, est nulla provident deserunt modi iusto cupiditate et, eum odio minima quasi maxime ex sequi! Unde, reiciendis voluptas? Repudiandae saepe qui iure optio necessitatibus nostrum ut ipsa accusamus? Inventore neque perspiciatis sapiente nihil laboriosam error alias id commodi eos, itaque quibusdam voluptatum quos architecto ratione perferendis, aliquid laudantium aliquam voluptatem temporibus dolore reiciendis dolor libero explicabo? Commodi, consectetur!
            </p>
        </div>

        <div class="ourTeam">
            <h2>Our Team</h2>
            <div class="boxCard">
                <div class="profile">
                    <div class ="imageProfile">
                        <div class ="imageProfile">
                        <img src="${pictIcon}" alt="">
                    </div>
                    </div>
                    <h4>Om Mahen</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-envelope-at-fill"></i></a>
                    </div>
                </div>

                <div class="profile">
                    <div class ="imageProfile">
                        <img src="${pictIcon}" alt="">
                    </div>
                    <h4>David Slebeww</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-envelope-at-fill"></i></a>
                    </div>
                </div>

                <div class="profile">
                    <div class ="imageProfile">
                        <img src="${pictIcon}" alt="">
                    </div>
                    <h4>David Slebeww</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-envelope-at-fill"></i></a>
                    </div>
                </div>

                <div class="profile">
                    <div class ="imageProfile">
                        <img src="${pictIcon}" alt="">
                    </div>
                    <h4>David Slebeww</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-envelope-at-fill"></i></a>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="credit">
            <h2>Credit</h2>
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
        
    </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default About;
