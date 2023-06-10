import CONFIG from '../../globals/config';

const createLostItemCard = (item) => `
<div class="card home-card" style="width: 18rem;">
    <img data-src="${CONFIG.BASE_IMAGE_URL}${item.iditem_image}" class="card-img-top lazyload" alt="...">
    <div class="card-home-body">
        <h5><a href="#/item-detail/${item.id}">${item.item_name}</a></h5>
        <p class="card-home-text">${item.item_description}</p>
        <p class="home-location"><i class="material-icons">place</i>${item.item_location}</p>
    </div>
</div>`;

const createLostItemCardForResult = (lostItem) => `
<div class="item-card">
    <img data-src="${CONFIG.BASE_IMAGE_URL}${lostItem.iditem_image}" class="card-img-top lazyload" alt="...">
    <p class="item-lost-tag"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/treasure-map.png" alt="lost-item"/>Lost</p>
    <p class="location"><i class="material-icons">place</i>${lostItem.item_location}</p>
    <div class="card-body">
        <h5><a href="#/item-detail/${lostItem.id}">${lostItem.item_name}</a></h5>
        <p class="card-date">
        <span class="day">${new Date(lostItem.item_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long' })}</span>
         <span class="year">${new Date(lostItem.item_date).toLocaleDateString('id-ID', { year: 'numeric' })}</span>
        </p>     
        <p class="card-text">${lostItem.item_description}</p>
    </div>
</div>`;

const createFoundItemCardForResult = (foundItem) => `
<div class="item-card">
        <img data-src="${CONFIG.BASE_IMAGE_URL}${foundItem.iditem_image}" class="card-img-top lazyload" alt="...">
        <p class="item-found-tag"><img width="25" height="25" src="https://img.icons8.com/pulsar-line/48/open-box.png" alt="found-item"/>Found</p>
        <p class="location"><i class="material-icons">place</i>${foundItem.item_location}</p>
    <div class="card-body">
            <h5><a href=#/item-detail/${foundItem.id}>${foundItem.item_name}</a></h5>
            <p class="card-date">
            <span class="day">${new Date(foundItem.item_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long' })}</span>
             <span class="year">${new Date(foundItem.item_date).toLocaleDateString('id-ID', { year: 'numeric' })}</span>
             </p>
        <p class="card-text">${foundItem.item_description}</p>
    </div>
</div>`;

const createModalElement = () => `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Terms of Use</h1>
                    <button id="close-modal-button" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <terms-of-use></terms-of-use>
                </div>
                <div class="modal-footer">
                    <button type="button" id="cancel" class="btn btn-danger" data-backdrop="false">tidak setuju</button>
                    <button type="button" id="accept" class="btn btn-success">Setuju</button>
                </div>
            </div>
        </div>
    </div>
`;

export {
  createLostItemCard,
  createLostItemCardForResult,
  createModalElement,
  createFoundItemCardForResult,
};
