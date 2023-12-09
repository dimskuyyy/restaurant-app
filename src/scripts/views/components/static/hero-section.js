class heroSection extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero-container">
          <div class="hero-content">
              <div class="content">
                  <h1>Noesantara Restaurant</h1>
                  <p>Temukan Restoran Ternama Yang Ada Di Indonesia</p>
                  <p>Spend Your Money Here</p>
              </div>
              <a href="#exploreRestaurant" class="cta-to-list" aria-label="Tekan untuk melihat Katalog restoran">Lihat Katalog</a>
          </div>
          <div class="hero-backdrop"></div>
          <picture>
            <source media="(max-width:767px)" srcset="/images/heros/mobile.webp" type="image/webp">
            <source media="(max-width:767px)" srcset="/images/heros/mobile.jpg" type="image/jpeg">
            <source media="(max-width:1024px)" srcset="/images/heros/tablet.webp" type="image/webp">
            <source media="(max-width:1024px)" srcset="/images/heros/tablet.jpg" type="image/jpeg">
            <source media="(max-width:2000px)" srcset="/images/heros/laptop.webp" type="image/webp">
            <source media="(max-width:2000px)" srcset="/images/heros/laptop.jpg" type="image/jpeg">
            <img
              src="./images/heros/laptop.jpg"
              alt="Hero-image" draggable="false">
            </picture>
      </div>
    `;
  }
}

customElements.define('hero-section', heroSection);
