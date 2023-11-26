
class restoItem extends HTMLElement{
    constructor(){
        super();
    }

    set dataSet(data){
        this._data = data;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="card-cover">
                <img src="${this._data.pictureId}" alt="Preview ${this._data.name}">
                <p>${this._data.city}</p>
            </div>
            <div class="card-content">
                <p id="rating">Rating : ${this._data.rating} ⭐</p>
                <div class="card-description">
                    <h2>${this._data.name}</h2>
                    <p>${this._data.description}</p>
                </div>
            </div>
        `;
    }
}

customElements.define("resto-item",restoItem);