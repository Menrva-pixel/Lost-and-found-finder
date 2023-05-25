import pictIcon from '../../../public/icon.png';

const About = {
  async render() {
    return `
        <h2 class ="About">About</h2>
        <div class="Latar">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut in possimus minus earum tenetur quo. Consequuntur cumque ullam, porro alias nihil corporis mollitia, necessitatibus dolor odio, sed culpa dolores.
                Optio dolorem, est nulla provident deserunt modi iusto cupiditate et, eum odio minima quasi maxime ex sequi! Unde, reiciendis voluptas? Repudiandae saepe qui iure optio necessitatibus nostrum ut ipsa accusamus?
                Inventore neque perspiciatis sapiente nihil laboriosam error alias id commodi eos, itaque quibusdam voluptatum quos architecto ratione perferendis, aliquid laudantium aliquam voluptatem temporibus dolore reiciendis dolor libero explicabo? Commodi, consectetur!
            </p>
        </div>
        <div class="ourTeam">
            <h2>Our Team</h2>
            <div class="boxCard">
                <div class="kartu">
                    <img src="${pictIcon}" alt="">
                    <h3>Om Mahen</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus </p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-envelope-at-fill"></i></a>
                    </div>
                </div>

                <div class="kartu">
                    <img src="${pictIcon}" alt="">
                    <h3>David Slebeww</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus </p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-envelope-at-fill"></i></a>
                    </div>
                </div>

                <div class="kartu">
                    <img src="${pictIcon}" alt="">
                    <h3>David Slebeww</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus </p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-envelope-at-fill"></i></a>
                    </div>
                </div>

                <div class="kartu">
                    <img src="${pictIcon}" alt="">
                    <h3>David Slebeww</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis nam consectetur officia a ipsum odit delectus </p>
    
                    <div class="socialMedia">
                        <a href=""><i class="bi bi-github"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        <a href=""><i class="bi bi-envelope-at-fill"></i></a>
                    </div>
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
