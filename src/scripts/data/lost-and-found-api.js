import API_ENDPOINT from '../globals/api-endpoint';

class LostAndFoundAPI {
  static async lostItemList() {
    const response = await fetch(API_ENDPOINT.LOST_ITEMS);
    const responseJson = await response.json();
    return responseJson;
  }

  static async uploadImage(image) {
    const formData = new FormData();
    formData.append('image', image);
    const response = await fetch(API_ENDPOINT.UPLOAD, {
      method: 'POST',
      body: formData,
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async createLostItem(data) {
    const response = await fetch(API_ENDPOINT.LOST_ITEMS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default LostAndFoundAPI;