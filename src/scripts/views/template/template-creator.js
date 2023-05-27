const createLostItemCard = () => `
<div class="card home-card" style="width: 18rem;">
    <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="location"><i class="material-icons">place</i>Location </p>
        <h5><a href="#">Item Name</a></h5>
        <p class="card-text">Item Description goes here....</p>
    </div>
</div>`;

const createLostItemCardForResult = () => `
<div class="card">
    <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="location"><i class="material-icons">place</i>Location </p>
        <h5><a href="#">Item Name</a></h5>
        <p class="card-text">Item Description goes here....</p>
    </div>
</div>`;

export { createLostItemCard, createLostItemCardForResult };
