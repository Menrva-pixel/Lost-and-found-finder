import ImgDetail from '../../../public/images/placeholder.png';

const DetailItems = {
  async render() {
    return `
        <div id="detail-item">
            <div class="detail-image">
                <img src="${ImgDetail}" alt="item-detail-img">
            </div>
            <div class="detail-information">
                <a id ="date">01-01-2023</a>
                <h1>Item name</h1>
                <h3>Item Tag / Category</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor massa odio, at congue quam hendrerit id. Aenean diam ipsum, ornare sed quam nec, pharetra lobortis est. Mauris eget consequat enim. Nam arcu nulla, sollicitudin nec mollis eget, euismod in justo. Nam euismod elit sed pretium pretium. Curabitur mollis a ligula eget dignissim. Vestibulum ac nibh vitae neque venenatis elementum id non quam. Suspendisse interdum enim et lacus vehicula, non tincidunt diam ullamcorper. Proin nunc nisl, scelerisque iaculis mattis at, pharetra egestas dolor. Donec pulvinar eros a felis venenatis, non tincidunt diam condimentum. Quisque molestie nunc a molestie feugiat. Phasellus.  </p>
                <div class="detail-function">
                    <button>claim</button>
                    <a href="#">Hubungi finder</a>
                </div>
            </div>
        </div>
     `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default DetailItems;
