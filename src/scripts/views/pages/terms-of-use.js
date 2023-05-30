/* eslint-disable no-unused-vars */
const Tou = {
  async render() {
    return `
    <div id="terms-of-use">
    <h1>Ketentuan Penggunaan</h1>
    <ol>
        <li>
            <h3>Ketentuan Penggunaan</h3>
            <p>Dengan mengakses dan menggunakan Lost and Found Finder Website, Anda dianggap telah membaca, memahami, 
                dan menerima semua syarat dan ketentuan yang dijelaskan di bawah ini. Jika Anda tidak setuju dengan syarat 
                dan ketentuan ini, Anda tidak diperbolehkan menggunakan website ini.</p>
        </li>
        <li>
            <h3>Penggunaan Website</h3>
            <ul>
                <li>Lost and Found Finder Website adalah platform yang menyediakan layanan untuk membantu orang mencari
                    dan menemukan barang yang hilang. Penggunaan website ini harus sesuai dengan hukum yang berlaku.</li>
                <li>Anda bertanggung jawab sepenuhnya atas informasi yang Anda berikan saat menggunakan website ini. 
                    Informasi yang Anda berikan harus akurat, jujur, dan tidak menyesatkan.</li>
                <li>Anda tidak diperkenankan menggunakan website ini untuk tujuan ilegal, melanggar privasi orang lain,
                    mengirim spam, atau menyebabkan gangguan pada sistem atau layanan website ini.</li>
                <li>Lost and Found Finder Website berhak untuk menangguhkan atau menghentikan akses Anda ke website 
                    ini jika Anda melanggar syarat dan ketentuan ini.</li>
            </ul>  
        </li>
        <li> 
            <h3>Privasi</h3>
            <ul>
                <li>Lost and Found Finder Website menghormati privasi pengguna.
                    Kebijakan privasi kami menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi pengguna.
                    Dengan menggunakan website ini, Anda menyetujui kebijakan privasi kami yang dapat diakses di <a href="#" onclick="showPrivacyPolicy()">kebijakan privasi</a>.</li>
                <li>Anda bertanggung jawab atas informasi pribadi yang Anda berikan dan harus memastikan bahwa informasi tersebut akurat dan sesuai.</li>
            </ul>
        </li>
        <li>
            <h3>Konten Pengguna</h3>
            <ul>
                <li>Anda dapat mengirimkan konten, seperti deskripsi barang yang hilang atau ditemukan, gambar, dan informasi lainnya.
                    Anda bertanggung jawab penuh atas konten yang Anda kirimkan dan menjamin bahwa Anda memiliki hak yang cukup untuk mengirimkan konten tersebut.</li>
                <li>Lost and Found Finder Website berhak untuk menghapus konten yang dianggap melanggar syarat dan ketentuan ini, melanggar hak kekayaan intelektual orang lain,
                    atau tidak sesuai dengan tujuan website ini.</li>
            </ul>
        </li>
        <li> 
            <h3>Tanggung Jawab</h3>
            <ul>
                <li>Lost and Found Finder Website tidak bertanggung jawab atas kehilangan atau kerusakan yang timbul akibat penggunaan website ini atau ketergantungan pada informasi yang disediakan di dalamnya.</li>
                <li>Anda menggunakan website ini dengan risiko sendiri. Lost and Found Finder Website tidak memberikan jaminan atas keakuratan, keandalan, atau ketersediaan informasi di website ini.</li>
                <li>Lost and Found Finder Website tidak bertanggung jawab atas tindakan atau kelalaian pengguna website ini.</li>
            </ul>
        </li>
        <li>
            <h3>Perubahan Syarat dan Ketentuan</h3>
            <p>Lost and Found Finder Website berhak untuk mengubah syarat dan ketentuan ini sesuai kebijakan yang dianggap perlu. Perubahan akan diumumkan di website ini. Pengguna diharapkan untuk secara berkala memeriksa syarat dan ketentuan yang berlaku.<br>
                Harap diingat bahwa syarat dan ketentuan ini hanya merupakan contoh umum dan sebaiknya Anda berkonsultasi dengan ahli hukum atau pengacara untuk menyusun syarat dan ketentuan yang sesuai dengan kebutuhan khusus Anda.</p>
        </li>
    </ol>
</div>


      `;
  },

  async afterRender() {
    function showPrivacyPolicy() {
      // Menampilkan pop-up kebijakan privasi di sini
      alert('Ini adalah kebijakan privasi Lost and Found Finder Website.');
    }
  },
};

export default Tou;
