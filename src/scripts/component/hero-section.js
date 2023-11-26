class heroSection extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="hero-container">
                <div class="hero-content">
                    <div class="content">
                        <h1>Noesantara Restaurant</h1>
                        <p>Temukan Restoran Ternama Yang Ada Di Indonesia</p>
                        <p>Spend Your Money Here</p>
                    </div>
                </div>
                <div class="hero-backdrop"></div>
                <img src="./images/heros/hero-image_1.jpg" alt="Noesantara Hero Background"/>
            </div>
        `;
    }
}

customElements.define("hero-section",heroSection);