const createLostItemCard = () => `
<div class="card home-card" style="width: 18rem;">
    <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="location"><i class="material-icons">place</i>Location </p>
        <h5><a href="#/item-detail">Item Name</a></h5>
        <p class="card-text">Item Description goes here....</p>
    </div>
</div>`;

const createLostItemCardForResult = () => `
<div class="card">
    <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="location"><i class="material-icons">place</i>Location </p>
        <h5><a href="#/item-detail">Item Name</a></h5>
        <p class="card-text">Item Description goes here....</p>
    </div>
</div>`;

const createModalElement = () => `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Terms of Use</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <terms-of-use></terms-of-use>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" id="cancel" class="btn btn-danger">tidak setuju</button>
                    <button type="button" id="accept" class="btn btn-success">Setuju</button>
                </div>
            </div>
        </div>
    </div>
`;

export { createLostItemCard, createLostItemCardForResult, createModalElement };
