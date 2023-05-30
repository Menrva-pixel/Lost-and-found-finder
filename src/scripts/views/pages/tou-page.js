import '../components/_terms-of-use';

const Tou = {
  async render() {
    return `
    <div class="tou-title">
      <h1>Ketentuan Pengguna</h1>
    </div>
      <terms-of-use></terms-of-use>
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Tou;
