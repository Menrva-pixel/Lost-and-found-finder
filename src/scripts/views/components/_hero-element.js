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
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .hero {
      display: flex;
      align-items: center;
      justify-content: center;  
      padding: 120px 420px;
    }
    
    .hero-text {
      flex: 1;
      padding-right: 20px;
    }

    .hero-text h1{
      font-size: 5.2em;
      color: #43609b;
    }

    button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
      border: none;
      border-radius: 4px;
      background-color: #43609b;
      color: #fff;
      transition: background-color 0.3s ease;
    }
    
    button:hover {
      background-color: #c99c26;
    }
    
    button:active {
      transform: translateY(2px);
    }
    
    .hero-text p {
      color: #1c1a1a;
      text-shadow: 1px 1px rgb(143, 143, 143);
    }
    
    .hero-image {
      min-width: 450px;
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

    @media(max-width: 790px) {
      .hero {
        padding: 140px;
      }

      .hero-text h1 {
        font-size: 3.2em;
      }
    }

    @media (max-width: 1100px) {
      .hero-image {
      display: none;
      }
    }


      
    
      
    </style>
    <div class="hero">
    <div class="hero-text">
      <h1>Kehilangan Barang?</h1>
      <p>Merasa menemukan atau kehilangan barang ?</p>
      <p>Buat laporan disini</p>
      <button href="#id">Laporkan</button>
    </div>
    <div class="hero-image">
      <img src="${bannerImage}" alt="Hero Image">
    </div>
  </div>
    `;
  }
}

customElements.define('hero-element', BannerElement);
