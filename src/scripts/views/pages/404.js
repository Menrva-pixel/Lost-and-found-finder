/* eslint-disable no-plusplus */
const Error = {
  async render() {
    return `
      <div id="bad-request">
        <img src="images/404.png">
          <div class="bd-desc">
            <p>Ooopss.. page not found</p>
            <p>You will be redirected to the homepage shortly.</p>
          </div>  
        <div id="countdown"></div>
      </div>
    `;
  },

  async afterRender() {
},
};

export default Error;
