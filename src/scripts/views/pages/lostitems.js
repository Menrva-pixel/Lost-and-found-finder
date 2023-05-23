import createLostItemCard from '../template/template-creator';

const LostItems = {
  async render() {
    return `
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-3">
          <h2 class="grid-title"><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/filter--v1.png" alt="filter--v1"/> Filters</h2>
          <hr>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
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
          ${createLostItemCard()}
        </div>
      </div>
    </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default LostItems;
