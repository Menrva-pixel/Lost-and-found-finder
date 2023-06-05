/* eslint-disable no-promise-executor-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
import swal from 'sweetalert2';
import img from '../../../public/images/img-finder.png';
import { createModalElement } from '../template/template-creator';

class FoundForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.afterRender();
  }

  render() {
    this.innerHTML = `
      ${createModalElement()}
      <h2 class="form-title">Form Penemuan Barang</h2>
      <div class="card form-container">
        <div class="left-form">
          <img src="${img}">
          <div class="left-description">
            <h4>Masukan Data dan Informasi penemuan</h4>
            <p>Pastikan data dan Informasi penemuan sesuai<br> dengan kriteria,
            dan data diri pribadi harus jelas<br> dan benar!</p>
            <br><hr>
            <h4> Kehilangan Barang ? </h4>
            <p>Jika anda merasa kehilangan barang <br> anda juga bisa membuat laporan kehilangan <br><a href="#/lost-item-service">disini!</a></p>
          </div>
        </div>
        <div class="right-form">
          <form id="found-form">
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
              <textarea class="form-control" id="item-description" rows="3" placeholder="max 150 karakter.." maxlength="150"></textarea>
            </div>

            <div class="mb-3">
              <label for="found-date">Tanggal penemuan</label>
              <input type="date" class="form-control" id="found-date">
            </div>

            <div class="mb-3">
              <label for="find-location">Lokasi Penemuan</label>
              <input type="text" class="form-control" id="find-location" placeholder="Masukkan lokasi penemuan">
            </div>

            <div class="mb-3">
              <label class="form-label" for="upload">Unggah Foto</label>
              <input id="upload" type="file" class="form-control border-0">
            </div>

            <div class="image-area mb-3">
              <img id="imageResult" src="#" alt="" class="img-fluid rounded shadow-sm mx-auto d-block">
            </div>

            <div class="submit-btn">
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="agreement">
                <label class="form-check-label" for="agreement">Saya setuju dengan <a class="syarat" data-bs-toggle="modal" data-bs-target="#exampleModal">ketentuan dan persyaratan</a>.</label>
              </div>
              <button type="submit" class="btn btn-primary" id="submit-btn" disabled>Submit</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  afterRender() {
    const uploadElement = document.getElementById('upload');
    const agreementCheckbox = document.getElementById('agreement');
    const formElement = document.getElementById('found-form');
    const submitButton = document.getElementById('submit-btn');

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

    formElement.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (validateForm()) {
        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = 'Submitting...';
        submitButton.classList.add('loading');

        try {
          // Simulate API request delay (replace with actual API request)
          await new Promise((resolve) => setTimeout(resolve, 2000));

          // Submit form
          console.log('Form submitted!');
          formElement.reset();
          swal.fire({
            title: 'Success',
            text: 'Form submitted!',
            icon: 'success',
          }).then(() => {
            window.location.reload();
          });
        } catch (error) {
          console.log('Form submission failed!', error);
          swal.fire({
            title: 'Error',
            text: 'Form submission failed!',
            icon: 'error',
          });
        } finally {
          // Enable submit button and restore its text
          submitButton.disabled = false;
          submitButton.classList.remove('loading');
          submitButton.innerHTML = 'Submit';
        }
      } else {
        console.log('Form validation failed!');
        swal.fire({
          title: 'Error',
          text: 'Form validation failed!',
          icon: 'error',
        });
      }
    });

    formElement.addEventListener('input', () => {
      if (validateForm()) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });

    function validateForm() {
      const userName = document.getElementById('user-name').value;
      const userEmail = document.getElementById('user-email').value;
      const userPhone = document.getElementById('user-phone').value;
      const itemName = document.getElementById('item-name').value;
      const itemDescription = document.getElementById('item-description').value;
      const foundDate = document.getElementById('found-date').value;
      const foundLocation = document.getElementById('find-location').value;
      const agreementChecked = agreementCheckbox.checked;

      // Validation logic
      if (
        userName.trim() === ''
        || userEmail.trim() === ''
        || userPhone.trim() === ''
        || itemName.trim() === ''
        || itemDescription.trim() === ''
        || foundDate.trim() === ''
        || foundLocation.trim() === ''
        || !agreementChecked
      ) {
        return false;
      }

      return true;
    }
  }
}

customElements.define('found-form', FoundForm);
