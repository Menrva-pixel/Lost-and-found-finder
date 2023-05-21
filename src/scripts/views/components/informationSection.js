class information extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2>Informasi Kehilangan</h2>
        <div class="containerCard">
            <div class="card" style="width: 18rem;">
                    <img src="https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="location"><i class="material-icons">place</i> Entah dimana</p>
                        <h5>Di Laut yang Dalam</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea itaque, explicabo aliquam quae voluptas a porro laborum cumque facilis atque tenetur quis ducimus odit! Ratione dolores perferendis veritatis aut magni?</p>
                    </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="location"><i class="material-icons">place</i> Entah dimana</p>
                    <h5>Di Laut yang Dalam</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea itaque, explicabo aliquam quae voluptas a porro laborum cumque facilis atque tenetur quis ducimus odit! Ratione dolores perferendis veritatis aut magni?</p>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="location"><i class="material-icons">place</i> Entah dimana</p>
                    <h5>Di Laut yang Dalam</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea itaque, explicabo aliquam quae voluptas a porro laborum cumque facilis atque tenetur quis ducimus odit! Ratione dolores perferendis veritatis aut magni?</p>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="location"><i class="material-icons">place</i> Entah dimana</p>
                    <h5>Di Laut yang Dalam</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea itaque, explicabo aliquam quae voluptas a porro laborum cumque facilis atque tenetur quis ducimus odit! Ratione dolores perferendis veritatis aut magni?</p>
                </div>
            </div>

            <div class="card" style="width: 18rem;">
                <img src="https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="location"><i class="material-icons">place</i> Entah dimana</p>
                    <h5>Di Laut yang Dalam</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea itaque, explicabo aliquam quae voluptas a porro laborum cumque facilis atque tenetur quis ducimus odit! Ratione dolores perferendis veritatis aut magni?</p>
                </div>
            </div>
        </div>
        `;
  }
}
customElements.define('information-section', information);
