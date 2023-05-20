import '../components/_site-description-element';

const Home = {
  async render() {
    return `
        <hero-element></hero-element>
        <site-description-element></site-description-element>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
