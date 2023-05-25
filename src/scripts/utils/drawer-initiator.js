const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    button.classList.toggle('open');
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.remove('open');
    button.classList.remove('open');
  },
};

export default DrawerInitiator;
