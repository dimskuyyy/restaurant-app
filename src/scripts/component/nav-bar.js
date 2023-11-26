class navBar extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = `
            <div class="navigation-wrapper">
                <article class="nav-head">
                    <section class="nav-logo">
                        <img src="./images/nusantara_logo.png" alt="Noesantara, Rekomendasi restoran terbaik di Indonesia">
                    </section>
                    <a href="#mainContent" id="skipToContent">Skip To Content</a>
                    <section class="nav-hamburger">
                        <button id="dropdown">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </section>
                </article>
                <article class="nav-link">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#">Favorite</a></li>
                        <li><a href="https://github.com/dimskuyyy">About Us</a></li>
                    </ul>
                </article>
            </div>
        `;
    }
}

customElements.define('nav-bar',navBar);