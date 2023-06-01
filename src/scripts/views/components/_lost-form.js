/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
import img from '../../../public/images/img-missing.png';

class LostForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListener();
  }

  addEventListener() {
    const syarat = this.querySelector('.syarat');

    syarat.addEventListener('click', () => {
      window.location.hash = '#/terms-of-use';
    });
  }

  render() {
    this.innerHTML = `
      <h2 class="form-title">Form Kehilangan Barang</h2>
      <div class="card form-container">
        <div class="left-form">
          <img src="${img}">
          <div class="left-description">
            <h4>Masukan Data dan Informasi Kehilangan</h4>
            <p>Pastikan data dan Informasi kehilangan sesuai<br> dengan kriteria,
            dan data diri pribadi harus jelas<br> dan benar</p>
            <br>
            <h4> Menemukan Barang ? </h4>
            <p>Selain melaporkan kehilangan,<br>Anda juga bisa menjadi
            penolong<br> dengan melaporkan barang yang ditemukan <br>
            <span class="disini"><a href="#/found-item-service">disini!</a></span></p>
          </div>
        </div>

        <div class="right-form">
          <form id="lost-form">
            <div class="mb-3">
              <label for="user-name">Nama Lengkap</label>
              <input type="text" class="form-control" id="user-name" placeholder="Masukkan nama lengkap">
            </div>

          <div class="mb-3">
            <label for="user-email">Email</label>
            <input type="email" class="form-control" id="user-email" placeholder="Masukkan email">
          </div>

          <div class="mb-3">
            <label for="user-phone">Nomor Telepon</label>
            <input type="tel" class="form-control" id="user-phone" placeholder="Masukkan nomor telepon">
          </div>

          <div class="mb-3">
            <label for="item-name">Nama Barang</label>
            <input type="text" class="form-control" id="item-name" placeholder="Masukkan nama barang">
          </div>

          <div class="mb-3">
            <label for="item-description">Deskripsi Barang</label>
            <textarea class="form-control" id="item-description" rows="4" placeholder="Masukkan deskripsi barang"></textarea>
          </div>

          <div class="mb-3">
            <label for="loss-date">Tanggal Kehilangan</label>
            <input type="date" class="form-control" id="loss-date">
          </div>

          <div class="mb-3">
            <label for="loss-location">Lokasi Kehilangan</label>
            <input type="text" class="form-control" id="loss-location" placeholder="Masukkan lokasi kehilangan">
          </div>

          <div class="mb-3">
            <label class="form-label" for="upload">Unggah Foto</label>
            <input id="upload" type="file" class="form-control border-0">
          </div>

          <div class="image-area mb-3">
            <img id="imageResult" src="#" alt="" class="img-fluid rounded shadow-sm mx-auto d-block">
          </div>

          <div class="">
            <div class="form-check mb-3">
              <input class="form-check-input" type="checkbox" id="agreement">
              <label class="form-check-label" for="agreement">Saya setuju dengan <a class="syarat">ketentuan dan persyaratan</a>.</label>
            </div>
            <button type="submit" class="btn btn-submit">Submit</button>
            <button type="reset" class="btn btn-danger">Batal</button>
          </div>
        </form>
        </div>
      </div>
    `;
  }

  async afterRender() {
    const uploadElement = document.getElementById('upload');
    const agreementCheckbox = document.getElementById('agreement');
    const formElement = document.getElementById('lost-form');

    uploadElement.addEventListener('change', () => {
      if (uploadElement.files && uploadElement.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageResult = document.getElementById('imageResult');
          imageResult.src = e.target.result;
        };
        reader.readAsDataURL(uploadElement.files[0]);
      }
    });

    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      if (validateForm()) {
        // Submit form
        console.log('Form submitted!');
      } else {
        console.log('Form validation failed!');
      }
    });

    function validateForm() {
      const userName = document.getElementById('user-name').value;
      const userEmail = document.getElementById('user-email').value;
      const userPhone = document.getElementById('user-phone').value;
      const itemName = document.getElementById('item-name').value;
      const itemDescription = document.getElementById('item-description').value;
      const lossDate = document.getElementById('loss-date').value;
      const lossLocation = document.getElementById('loss-location').value;
      const agreementChecked = agreementCheckbox.checked;

      // validation logic
      if (
        userName.trim() === ''
        || userEmail.trim() === ''
        || userPhone.trim() === ''
        || itemName.trim() === ''
        || itemDescription.trim() === ''
        || lossDate.trim() === ''
        || lossLocation.trim() === ''
        || !agreementChecked
      ) {
        return false;
      }

      return true;
    }
  }
}

customElements.define('lost-form', LostForm);
