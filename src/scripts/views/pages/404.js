/* eslint-disable no-plusplus */
const Error = {
  async render() {
    return `
      <div id="bad-request">
        <img src="images/404.png" alt="404 Bad Request">
          <div class="bd-desc">
            <p>Ooopss.. page not found</p>
            <p>You will be redirected to the homepage shortly.</p>
          </div>  
        <div id="countdown"></div>
      </div>
    `;
  },

  async afterRender() {
    const countdownElement = document.getElementById('countdown');
    let countdown = 5;

    const countdownInterval = setInterval(() => {
      countdownElement.textContent = countdown;
      countdown--;

      if (countdown < 0) {
        clearInterval(countdownInterval);
        window.location.href = '#';
      }
    }, 1000);
  },
};

export default Error;
