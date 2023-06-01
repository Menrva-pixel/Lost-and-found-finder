class FooterElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 footer-about wow fadeInUp">
                            <img class="logo-footer" src="https://i.ibb.co/17tVGNd/icon.png" alt="logo-footer">
                            <p>
                                We are a young company always looking for new and creative ideas to help you with our products in your everyday work.
                            </p>
                            <p><a href="#/about"">Our Team</a></p>
                        </div>
                        <div class="col-md-4 offset-md-1 footer-contact wow fadeInDown">
                            <h3>Contact</h3>
                            <p><i class="fas fa-map-marker-alt"></i> Via Bekasi 12, 17111 Jawa Barat, Indonesia</p>
                            <p><i class="fas fa-phone"></i> Phone: (62) 8060 6XXX</p>
                            <p><i class="fas fa-envelope"></i> Email: <a href="mailto:hello@domain.com">lostandfound@gmail.com</a></p>
                        </div>
                        <div class="col-md-4 footer-links wow fadeInUp">
                            <div class="row">
                                <div class="col">
                                    <h3>Links</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <p><a class="scroll-link" href="#top-content">Home</a></p>
                                    <p><a href="#">Features</a></p>
                                    <p><a href="#">How it works</a></p>
                                </div>
                                <div class="col-md-6">
                                    <p><a href="#">Plans &amp; pricing</a></p>
                                    <p><a href="#">Affiliates</a></p>
                                    <p><a href="#">Terms</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="container">
                    <div class="col-md-6 footer-copyright">&copy; 2023 Lost & Found Finder by <a href="#" target="_blank">Capstone Team</a>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('footer-element', FooterElement);