/* eslint-disable camelcase */
import swal from 'sweetalert2';
import LostAndFoundAPI from '../data/lost-and-found-api';
import successImage from '../../public/images/success.png';
import errorImage from '../../public/images/error.png';

const onSubmitFoundForm = async (event) => {
  event.preventDefault();

  const user_name = document.getElementById('user-name').value;
  const user_email = document.getElementById('user-email').value;
  const user_phone = document.getElementById('user-phone').value;
  const item_name = document.getElementById('item-name').value;
  const item_description = document.getElementById('item-description').value;
  const item_date = document.getElementById('found-date').value;
  const item_location = document.getElementById('find-location').value;
  const image = document.getElementById('upload').files[0];

  console.log('Wait data lagi di upload');
  const submitButton = document.getElementById('submit-btn');
  const formElement = document.getElementById('found-form');
  submitButton.disabled = true;
  submitButton.innerHTML = 'Submitting...';
  submitButton.classList.add('loading');

  try {
    // Simulate API request delay (replace with actual API request)
    const imgResponse = await LostAndFoundAPI.uploadImage(image);
    const iditem_image = imgResponse.imageId;

    const userData = {
      user_name,
      user_email,
      user_phone,
      item_name,
      item_description,
      item_date,
      item_location,
      status: 'found',
      iditem_image,
    };

    await LostAndFoundAPI.createItem(userData);

    // Submit form
    console.log('Form submitted!');
    formElement.reset();
    swal.fire({
      title: 'Berhasil!',
      text: 'Form telah berhasil di submit!',
      iconHtml: `<img src="${successImage}" alt="Custom Icon">`,
      icon: 'success',
    }).then(() => {
      window.location.reload();
    });
  } catch (error) {
    console.log('Form submission failed!', error);
    swal.fire({
      title: 'Oopss..',
      text: 'Silahkan isi data terlebih dahulu!',
      iconHtml: `<img src="${errorImage}" alt="Custom Icon">`,
      icon: 'error',
    });
  } finally {
    // Enable submit button and restore its text
    submitButton.disabled = false;
    submitButton.classList.remove('loading');
    submitButton.innerHTML = 'Submit';
  }
};

export default onSubmitFoundForm;
