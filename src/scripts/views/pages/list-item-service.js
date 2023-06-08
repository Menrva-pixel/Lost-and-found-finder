import LostAndFoundAPI from '../../data/lost-and-found-api';
import { createFoundItemCardForResult, createLostItemCardForResult } from '../template/template-creator';

const DetailItems = {
  async render() {
    return `
    <div class="container">
      <div class="row mt-3">

      <div class="lds-dual-ring"></div>

      </div> 
    </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const container = document.querySelector('.row');
    console.log(container);
    setTimeout(() => {
      container.innerHTML = `
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
        <div class="col">${createLostItemCardForResult()}</div>
        <div class="col">${createLostItemCardForResult()}</div>
        <div class="col">${createLostItemCardForResult()}</div>
        <div class="col">${createLostItemCardForResult()}</div>
      </div>
    </div>
    
  </div>
    `;
    }, 1300);
  },
};

export default DetailItems;
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

          <div class="input-group-search mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text search-icon"><img src="https://img.icons8.com/dotty/80/search.png" alt="search-icon"></span>
          </div>
          <input id="search-input" type="text" class="form-control" placeholder="Cari barang.." aria-describedby="basic-addon2">
        </div>
            <div class="form-group mb-3">
              <label for="status">Status:</label>
              <select class="form-control" id="status">
                <option value="">Semua</option>
                <option value="found">Ditemukan</option>
                <option value="lost">Kehilangan</option>
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
          <div class="container mb-3">
            <div id="item-list" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            <div class="loading-container">
              <div class="loading-spinner"></div>
              <div class="loading-text">Loading item list...</div>
            </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
        `;
  },

  async afterRender() {
    const statusFilter = document.getElementById('status');
    const fromDateInput = document.getElementById('fromDate');
    const toDateInput = document.getElementById('toDate');
    const searchInput = document.querySelector('#search-input');
    const itemContainer = document.querySelector('#item-list');

    const items = await LostAndFoundAPI.itemList();

    function filterItems() {
      const selectedStatus = statusFilter.value;
      const fromDate = new Date(fromDateInput.value);
      const toDate = new Date(toDateInput.value);

      itemContainer.innerHTML = '';
      let hasDisplayedItems = false;

      items.forEach((item) => {
        if (selectedStatus && item.status !== selectedStatus) {
          return;
        }

        const itemDate = new Date(item.item_date);
        // eslint-disable-next-line max-len
        if ((fromDateInput.value && itemDate < fromDate) || (toDateInput.value && itemDate > toDate)) {
          return;
        }

        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm && !item.item_name.toLowerCase().includes(searchTerm)) {
          return;
        }

        hasDisplayedItems = true;

        if (item.status === 'found') {
          itemContainer.innerHTML += `<div class="col">${createFoundItemCardForResult(item)}</div>`;
        } else {
          itemContainer.innerHTML += `<div class="col">${createLostItemCardForResult(item)}</div>`;
        }
      });

      if (!hasDisplayedItems) {
        // No items matched the filter criteria
        itemContainer.innerHTML = '<div class="no-items">No items found.</div>';
      }
    }

    filterItems();
    // Tambahkan event listener untuk tombol filter dan tombol pencarian
    const filterButton = document.querySelector('.btn-primary');

    filterButton.addEventListener('click', filterItems);
    searchInput.addEventListener('input', filterItems);
  },

};

export default DetailItems;
