import LostAndFoundAPI from '../../data/lost-and-found-api';
import { createFoundItemCardForResult, createLostItemCardForResult } from '../template/template-creator';

const DetailItems = {
  async render() {
    return `
    <div class="container">
      <div class="row mt-3">

        <div class="col-md-3 mb-3">

          <h2 class="grid-title"><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/filter--v1.png" alt="filter--v1"/> Filters</h2>
          <hr>

          <form>
            <div class="form-group mb-3">
              <label for="status">Status:</label>
              <select class="form-control" id="status">
                <option value="">Semua</option>
                <option value="ditemukan">Ditemukan</option>
                <option value="kehilangan">Kehilangan</option>
              </select>
            </div>

            <div class="form-group mb-3">
              <label for="fromDate">Dari Tanggal:</label>
              <input type="date" class="form-control" id="fromDate">
            </div>

            <div class="form-group mb-3">
              <label for="toDate">Hingga Tanggal:</label>
              <input type="date" class="form-control" id="toDate">
            </div>

            <button type="submit" class="btn btn-primary">Filter</button>

          </form>

        </div>

        <div class="col-md-9">

          <h2><img width="40" height="40" src="https://img.icons8.com/material-outlined/30/check-document.png" alt="check-document"/> Result</h2>
          <hr>

          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search Anything" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary search-button" type="button"><img width="20" height="20" src="https://img.icons8.com/ios/20/search--v1.png" alt="search--v1"/></button>
            </div>
          </div>

          <div class="container mb-3">
            <div id="item-list" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            </div>
          </div>
          
        </div>

      </div>
    </div>
        `;
  },

  async afterRender() {
    const lostItems = await LostAndFoundAPI.lostItemList();
    const foundItems = await LostAndFoundAPI.foundItemList();

    const mergedItems = lostItems.map((item) => ({ ...item, type: 'lost' }))
      .concat(foundItems.map((item) => ({ ...item, type: 'found' })));

    mergedItems.sort((item1, item2) => {
      const date1 = new Date(item1.loss_date || item1.found_date);
      const date2 = new Date(item2.loss_date || item2.found_date);
      return date1 - date2;
    });

    const itemListContainer = document.querySelector('#item-list');
    mergedItems.forEach((item) => {
      if (item.type === 'found') {
        itemListContainer.innerHTML += `<div class="col">${createFoundItemCardForResult(item)}</div>`;
      } else {
        itemListContainer.innerHTML += `<div class="col">${createLostItemCardForResult(item)}</div>`;
      }
    });
  },
};

export default DetailItems;
