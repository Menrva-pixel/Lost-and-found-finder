/* eslint-disable no-inner-declarations */
/* eslint-disable no-param-reassign */
import bannerImage from '../../../public/images/hero/hero.png';

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
      banner {
        display: grid;
        align-content: center;
        height: 500px;
        padding: 24px;
        position: relative;
      }

      .banner-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(2px);
      }

      .banner-text {
        text-align: center;
        z-index: 1;
        padding: 0 20px;
      }
      
      h1 {
        font-family: 'Satisfy', cursive;
        color: rgb(145, 126, 87);
        font-size: 2.8em;
        font-weight: bold;
        margin-bottom: 20px;
        text-shadow: 2px 2px #0c0c0c;
      }

      p {
        font-size: 24px;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        border-right: .15em solid white;
        white-space: nowrap;
        margin: 0 auto;
        letter-spacing: .15em;
        animation: typing 2.5s steps(30, end), blink-caret .75s step-end infinite;
        width: 30%;
      }

      @keyframes typing {
        from {
          width: 0;
        }
        to {
          width: 20%;
        }
      }

      @keyframes blink-caret {
        from,
        to {
          border-color: transparent;
        }
        50% {
          border-color: white;
        }
      }

      @media (max-width: 576px) {
        h1 {
          font-size: 36px;
        }
        p {
          font-size: 20px;
          width: 220px;
        }
      }

      @media (min-width: 576px) and (max-width: 992px) {
        h1 {
          font-size: 42px;
        }
        p {
          font-size: 22px;
          width: 220px;
        }
      }

      @media (min-width: 992px) and (max-width: 1200px) {
        h1 {
          font-size: 48px;
        }
        p {
          font-size: 24px;
          width: 220px;
        }
      }

      @media (min-width: 1200px) {
        h1 {
          font-size: 56px;
        }
        p {
          font-size: 28px;
        }
      }

      @media (max-width: 576px) {
        banner {
          height: 300px;
          padding: 16px;
        }
      
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
      
        p {
          font-size: 16px;
        }
      }
      
      @media (min-width: 577px) and (max-width: 768px) {
        banner {
          height: 400px;
          padding: 20px;
        }
      
        h1 {
          font-size: 28px;
          margin-bottom: 15px;
        }
      
        p {
          font-size: 18px;
          width: 250px;
        }
      }
      
      @media (min-width: 769px) and (max-width: 992px) {
        banner {
          height: 450px;
          padding: 24px;
        }
      
        h1 {
          font-size: 32px;
          margin-bottom: 20px;
        }
      
        p {
          font-size: 20px;
          width: 280px;
        }
      }
      
      
    </style>
    <banner>
      <div class='banner-container'>
        <img src='${bannerImage}' alt='Banner-image' crossorigin='anonymous'>
      </div>
      <div class='banner-text'>
        <h1>Lost & Found</h1>
        <p id='typing-text'>Find or Report Missing Stuff Online</p>
      </div>
    </banner>
    `;

    const element = this.shadowDOM.getElementById('typing-text');

    if (element !== null) {
      const originalText = element.innerHTML;
      element.innerHTML = '';
      function typeText(text, i) {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(() => {
            typeText(text, i);
          }, Math.random() * 200);
        }
      }

      typeText(originalText, 0);
    }
  }
}

customElements.define('hero-element', BannerElement);
