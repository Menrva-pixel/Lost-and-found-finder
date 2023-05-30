import '../components/_site-description-element';
import '../components/_function-section';
import '../components/_information-section';
import '../components/_services-element';
import '../components/_nav-bar';
import '../components/_footer-element';
import '../components/_terms-of-use';

const Home = {
  async render() {
    return `
        <hero-element></hero-element>
        <site-description-element></site-description-element>
        <service-element></service-element>
        <div id="report">
          <function-section></function-section>
        </div>
        <information-section></information-section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const leftscroll = document.querySelector('#scrollLeft');
    const rightscroll = document.querySelector('#scrollRight');
    leftscroll.addEventListener('click', () => {
      const containerCard = document.querySelector('.containerCard');
      containerCard.scrollBy(-250, 0);
    });

    rightscroll.addEventListener('click', () => {
      const containerCard = document.querySelector('.containerCard');
      containerCard.scrollBy(250, 0);
    });
  },
};

export default Home;
