import '../components/_site-description-element';
import '../components/function-section';
import '../components/informationSection';
import '../components/_services-element';

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
  },
};

export default Home;
