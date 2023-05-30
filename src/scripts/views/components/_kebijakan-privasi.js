class KebijakanPrivasi extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div id="kebijakan-privasi">
        <h1>Kebijakan Privasi</h1>

        <h2>1. Jenis Informasi yang Dikumpulkan:</h2>
        <p>Jenis informasi pribadi yang dikumpulkan meliputi:</p>
        <ol>
            <ul>
                <li>Nama</li>
                <li>Alamat</li>
                <li>Alamat email</li>
                <li>Nomor telepon</li>
                <li>Informasi demografis</li>
                <li>Informasi lainnya yang relevan dengan layanan yang disediakan</li>
            </ul>

            <h2>2. Cara Pengumpulan Informasi:</h2>
            <p>Informasi pribadi dikumpulkan melalui:</p>
            <ul>
                <li>Formulir pendaftaran</li>
                <li>Interaksi pengguna dengan situs web</li>
                <li>Penggunaan teknologi pelacakan seperti cookies</li>
                <li>Sumber lainnya</li>
            </ul>
      
            <h2>3. Penggunaan Informasi:</h2>
            <p>Tujuan pengumpulan informasi pribadi meliputi:</p>
            <ul>
                <li>Menyediakan layanan</li>
                <li>Meningkatkan pengalaman pengguna</li>
                <li>Mengelola akun pengguna</li>
                <li>Mengirimkan informasi dan komunikasi terkait layanan</li>
            </ul>
      
            <h2>4. Keamanan Informasi:</h2>
            <p>Langkah-langkah yang diambil untuk melindungi informasi pribadi pengguna meliputi:</p>
            <ul>
                <li>Kebijakan keamanan</li>
                <li>Penggunaan enkripsi</li>
                <li>Tindakan keamanan lainnya</li>
            </ul>
      
            <h2>5. Pengungkapan Informasi kepada Pihak Ketiga:</h2>
            <p>Informasi pribadi pengguna akan diungkapkan kepada pihak ketiga dalam keadaan berikut:</p>
            <ul>
                <li>Diperlukan untuk memenuhi kewajiban hukum</li>
                <li>Kerjasama dengan mitra bisnis</li>
                <li>Dengan persetujuan pengguna</li>
            </ul>
      
            <h2>6. Pilihan Pengguna:</h2>
            <p>Pengguna memiliki hak untuk:</p>
            <ul>
                <li>Mengakses informasi pribadi mereka</li>
                <li>Mengubah informasi pribadi mereka</li>
                <li>Menghapus informasi pribadi mereka</li>
                <li>Mengelola preferensi privasi</li>
            </ul>
        
            <h2>7. Kebijakan Cookies:</h2>
            <p>Website menggunakan cookies dan teknologi pelacakan lainnya. Pengguna dapat mengelola preferensi cookie mereka melalui pengaturan browser mereka.</p>
        
            <h2>8. Perubahan Kebijakan Privasi:</h2>
            <p>Kebijakan privasi dapat berubah di masa mendatang. Pengguna akan diberitahu tentang perubahan tersebut melalui pemberitahuan di situs web atau melalui metode komunikasi lainnya.</p>
        
            <h2>9. Kontak:</h2>
            <p>Jika Anda memiliki pertanyaan atau kekhawatiran terkait kebijakan privasi, silakan hubungi kami melalui:</p>
            <ul>
                <li>Alamat: [Alamat perusahaan]</li>
                <li>Email: [Email perusahaan]</li>
                <li>Nomor telepon: [Nomor telepon perusahaan]</li>
            </ul>
        </ol>
        </div>
        <div class="kbj-button">
            <button><a href="#/Terms-of-use">Ok</a></button>
        </div>
      `;
  }
}

customElements.define('kebijakan-privasi', KebijakanPrivasi);
