/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2';
import './_kebijakan-privasi';

class TermsOfUse extends HTMLElement {
  connectedCallback() {
    this.render();
    const privacyLink = this.querySelector('.privacy-link');
    privacyLink.addEventListener('click', () => this.showPrivacyPolicy());

    const cancelButton = document.querySelector('#cancel');
    cancelButton.addEventListener('click', this.handleCancelButtonClick.bind(this));

    const acceptButton = document.querySelector('#accept');
    acceptButton.addEventListener('click', this.handleAcceptButtonClick.bind(this));

    // const termsContainer = this.querySelector('#terms-of-use');
    // termsContainer.addEventListener('scroll', this.handleTermsScroll.bind(this));
  }

  render() {
    this.innerHTML = `
    <div class="tou-update">
        <h3>Last Updated: May 30, 2023</h3>
    </div>
    <ol>
        <li class="tou-list">
            <h3 class="tou-title">Ketentuan Penggunaan</h3>
            <ul>
            <li> <p>Dengan mengakses dan menggunakan Lost and Found Finder Website, Anda dianggap telah membaca, memahami, 
                dan menerima semua syarat dan ketentuan yang dijelaskan di bawah ini. Jika Anda tidak setuju dengan syarat 
                dan ketentuan ini, Anda tidak diperbolehkan menggunakan website ini.</p></li>
            </ul>
        </li>
        <li class="tou-list">
            <h3 class="tou-title">Penggunaan Website</h3>
            <ul>
                <li>Lost and Found Finder Website adalah platform yang menyediakan layanan untuk membantu orang mencari
                    dan menemukan barang yang hilang. Penggunaan website ini harus sesuai dengan hukum yang berlaku.</li>
                    <br>
                <li>Anda bertanggung jawab sepenuhnya atas informasi yang Anda berikan saat menggunakan website ini. 
                    Informasi yang Anda berikan harus akurat, jujur, dan tidak menyesatkan.</li>
                    <br>
                <li>Anda tidak diperkenankan menggunakan website ini untuk tujuan ilegal, melanggar privasi orang lain,
                    mengirim spam, atau menyebabkan gangguan pada sistem atau layanan website ini.</li>
                    <br>
                <li>Lost and Found Finder Website berhak untuk menangguhkan atau menghentikan akses Anda ke website 
                    ini jika Anda melanggar syarat dan ketentuan ini.</li>
            </ul>  
        </li>
        <li class="tou-list"> 
            <h3 class="tou-title">Privasi</h3>
            <ul>
                <li>Lost and Found Finder Website menghormati privasi pengguna.
                    Kebijakan privasi kami menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi pengguna.
                    Dengan menggunakan website ini, Anda menyetujui kebijakan privasi kami yang dapat diakses di <a href="javascript:void(0)" class="privacy-link">kebijakan privasi</a>.</li>
                    <br>
                <li>Anda bertanggung jawab atas informasi pribadi yang Anda berikan dan harus memastikan bahwa informasi tersebut akurat dan sesuai.</li>
            </ul>
        </li>
        <li class="tou-list">
            <h3 class="tou-title">Konten Pengguna</h3>
            <ul>
                <li>Anda dapat mengirimkan konten, seperti deskripsi barang yang hilang atau ditemukan, gambar, dan informasi lainnya.
                    Anda bertanggung jawab penuh atas konten yang Anda kirimkan dan menjamin bahwa Anda memiliki hak yang cukup untuk mengirimkan konten tersebut.</li>
                    <br>
                <li>Lost and Found Finder Website berhak untuk menghapus konten yang dianggap melanggar syarat dan ketentuan ini, melanggar hak kekayaan intelektual orang lain,
                    atau tidak sesuai dengan tujuan website ini.</li>
            </ul>
        </li>
        <li class="tou-list"> 
            <h3 class="tou-title">Tanggung Jawab</h3>
            <ul>
                <li>Lost and Found Finder Website tidak bertanggung jawab atas kehilangan atau kerusakan yang timbul akibat penggunaan website ini atau ketergantungan pada informasi yang disediakan di dalamnya.</li>
                <br>
                <li>Anda menggunakan website ini dengan risiko sendiri. Lost and Found Finder Website tidak memberikan jaminan atas keakuratan, keandalan, atau ketersediaan informasi di website ini.</li>
                <br>
                <li>Lost and Found Finder Website tidak bertanggung jawab atas tindakan atau kelalaian pengguna website ini.</li>
            </ul>
        </li>
        <li class="tou-list">
            <h3 class="tou-title">Perubahan Syarat dan Ketentuan</h3>
            <ul>
            <li><p>Lost and Found Finder Website berhak untuk mengubah syarat dan ketentuan ini sesuai kebijakan yang dianggap perlu. Perubahan akan diumumkan di website ini. Pengguna diharapkan untuk secara berkala memeriksa syarat dan ketentuan yang berlaku.<br>
               </p></li>
            </ul>
        </li>
    </ol>
      `;
  }

  showPrivacyPolicy() {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '<kebijakan-privasi></kebijakan-privasi>';
  }

  handleAcceptButtonClick() {
    const acceptButton = document.querySelector('#accept');
    if (!acceptButton.disabled) {
      Swal.fire({
        title: 'Terms Accepted',
        text: 'Gunakan website kami dengan bijak sesuai dengan persetujuan',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          const element = document.getElementById('close-modal-button');
          const event = new Event('click');
          element.dispatchEvent(event);
          const checkbox = document.getElementById('agreement');
          checkbox.checked = true;
        }
      });
    }
  }

  handleCancelButtonClick() {
    const cancelButton = document.querySelector('#cancel');
    cancelButton.addEventListener('click', () => {
      const element = document.getElementById('close-modal-button');
      const event = new Event('click');
      element.dispatchEvent(event);
      window.location.href = '#/404';
    });
  }
}
// handleTermsScroll() {
//   const termsContainer = this.querySelector('#terms-of-use');
//   const acceptButton = this.querySelector('#accept');

//   if (termsContainer.scrollTop + termsContainer.clientHeight === termsContainer.scrollHeight) {
//     // User has scrolled to the bottom of the terms and conditions
//     acceptButton.disabled = false;
//   } else {
//     // User has not scrolled to the bottom of the terms and conditions
//     acceptButton.disabled = true;
//   }
// }

// Define the custom element
customElements.define('terms-of-use', TermsOfUse);
