class ServiceElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="services" class="services">
      <h1> Which one are you ? </h1>
      <div class="services-list">
        <ul>
          <li class="list-item1">
            <h2>Finder</h2>
            <p>The finder is someone who discovers or comes across a lost item or object. They play a crucial role in the process of finding and potentially returning lost belongings to their rightful owners.</p>
          </li>
          <li class="list-item2">
            <h2>Helper</h2>
            <p>The helper refers to an individual who offers assistance or support to those in need. In the context of the website, a helper could be someone who provides guidance, advice, or practical help to both finders and seekers in their efforts to locate or recover lost items.</p>
          </li>
          <li class="list-item3">
            <h2>Seeker</h2>
            <p>The seeker is a person actively searching for a lost or missing item. They are looking for information, resources, or services that can aid them in finding their lost belongings. Seekers rely on the assistance and tools provided by the website to increase their chances of locating their lost items.</p>
          </li>
        </ul>
      </div>
      </div>
      `;
  }
}

customElements.define('service-element', ServiceElement);
