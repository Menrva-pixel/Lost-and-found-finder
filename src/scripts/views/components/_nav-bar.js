class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a class="nav-link" href="#/home">HOME</a></li>
            <li class="dropdown">
              <a href="#" class="dropbtn nav-link">SERVICE</a>
              <div class="dropdown-content">
                <a href="#/service1">Service 1</a>
                <a href="#/service2">Service 2</a>
              </div>
            </li>
            <li><a class="btn-abt nav-link" href="#/about">ABOUT</a></li>
          </ul>
        </nav>
      `;

    const dropdownButton = this.querySelector('.dropbtn');
    const dropdownContent = this.querySelector('.dropdown-content');

    dropdownButton.addEventListener('click', () => {
      dropdownContent.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
      const { target } = event;
      const isDropdown = target.classList.contains('dropbtn');
      const isDropdownContent = target.classList.contains('dropdown-content');

      if (!isDropdown && !isDropdownContent) {
        dropdownContent.classList.remove('show');
      }
    });
  }
}

customElements.define('nav-bar', NavigationBar);
