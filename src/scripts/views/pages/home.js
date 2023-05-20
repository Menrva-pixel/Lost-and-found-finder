import '../components/_site-description-element';
import '../components/function-section';
import '../components/informationSection'
const Home = {
  async render() {
    return `
        <hero-element></hero-element>
        <site-description-element></site-description-element>
        <function-section></function-section>
        <information-section></information-section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
