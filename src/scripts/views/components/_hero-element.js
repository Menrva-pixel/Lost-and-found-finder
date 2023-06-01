/* eslint-disable no-plusplus */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-param-reassign */
import bannerImage from '../../../public/images/hero/guy.png';

class BannerElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    const buttonLapor = this.shadowRoot.querySelector('.btn-lapor');
    const reportSection = document.querySelector('#report');

    buttonLapor.addEventListener('click', (event) => {
      console.log('button pressed');
      event.preventDefault();
      reportSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .hero {
      display: flex;
      align-items: center;
      justify-content: center;  
    }
    
    .hero-text {
      flex: 1;
      padding-right: 20px;
    }

    .hero-text h1 {
      font-family: 'Raleway', sans-serif;
      font-weight: bold;
      font-size: 5.2em;
      color: #43609b;
      margin: 0px 20px 20px 0px;
      line-height: 1.125;
    }

    .hero-text h3 {
      margin: 0px 0px -10px 0px;
      font-size: 1.8em;
    }

    .btn-lapor {
      padding: 15px 40px 15px 40px;
      color: #d3d3d3;
      font-weight: 400;
      font-size: 1.4em;
      border: none;
      background: #333;
      border-radius: 5px;
      cursor: pointer;
    }
    
    button:hover {
      background-color: #43609b;
    }
    
    button:active {
      transform: translateY(2px);
    }
    
    .hero-text p {
      font-family: 'Montserrat', sans-serif;
      color: #1c1a1a;
      font-weight: 600;
      font-size: 1.2em;
    }
    
    .hero-image {
      width: 450px;
      height: auto;
      overflow: hidden;
    }
    
    .hero-image img {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.51);
      backdrop-filter: blur(1.9px);
      -webkit-backdrop-filter: blur(1.9px);
      border-radius: 50px 0 50px 0;
      object-fit: cover;
    }

    @media (max-width: 790px) {
      .hero {
        padding: 140px;
      }

      .hero-text h1 {
        font-size: 2.2em;
      }
    }

    @media (max-width: 1100px) {
      .hero-image {
      display: none;
      }
    }

    @media (max-width: 1367px) {
      .hero-text h1 {
        font-size: 4.2em;
      }

      .hero {
        padding: 120px 120px;
      }
    }
    </style>

    <div class="hero">
      <div class="hero-text">
        <h3>Finder</h3>
        <h1>Selamat Datang di Lost & Found</h1>
        <p>Kami menyediakan platform untuk membantu anda melaporkan atau mencari barang yang hilang!</p>
        <button class="btn-lapor">Buat Laporan</button>
      </div>
      <div class="hero-image">
        <img src="${bannerImage}" alt="Hero Image">
      </div>
    </div>
    `;
  }
}

customElements.define('hero-element', BannerElement);
