class copyRight extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = `
            <p><span>Copyright &copy; 2023</span> - Noesantara Apps</p>
        `;
    }
}

customElements.define("copy-right",copyRight);