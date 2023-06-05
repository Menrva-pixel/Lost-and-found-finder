/* eslint-disable camelcase */
import LostAndFoundAPI from '../data/lost-and-found-api';

const onSubmitLostForm = async (event) => {
  event.preventDefault();
  const user_name = document.getElementById('user-name').value;
  const user_email = document.getElementById('user-email').value;
  const user_phone = document.getElementById('user-phone').value;
  const item_name = document.getElementById('item-name').value;
  const item_description = document.getElementById('item-description').value;
  const loss_date = document.getElementById('loss-date').value;
  const loss_location = document.getElementById('loss-location').value;
  const image = document.getElementById('upload').files[0];

  const imgResponse = await LostAndFoundAPI.uploadImage(image);
  const iditem_image = imgResponse.imageId;

  const userData = {
    user_name,
    user_email,
    user_phone,
    item_name,
    item_description,
    loss_date,
    loss_location,
    iditem_image,
  };

  console.log(userData);

  const response = await LostAndFoundAPI.createLostItem(userData);
  console.log(response);
};

export default onSubmitLostForm;
