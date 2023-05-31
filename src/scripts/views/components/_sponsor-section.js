/* eslint-disable import/no-duplicates */
import sponsor1 from '../../../public/images/sponsor/univ-bsi.jpg';
import sponsor2 from '../../../public/images/sponsor/univ-bsi.jpg';
import sponsor3 from '../../../public/images/sponsor/univ-bsi.jpg';
import sponsor4 from '../../../public/images/sponsor/univ-bsi.jpg';

class SponsorSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="sponsor-title">
        <h2>Sponspored By</h2>
    </div>
    <div class="sponsor-container">
        <div class="university">
            <img src="${sponsor1}">
            <img src="${sponsor2}">
            <img src="${sponsor3}">
            <img src="${sponsor4}">
        </div>
        <div class="sponsor-add">
            
    `;
  }
}
// Define the custom element
customElements.define('sponsor-section', SponsorSection);
