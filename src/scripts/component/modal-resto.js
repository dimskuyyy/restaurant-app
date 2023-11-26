class modalResto extends HTMLElement{
    constructor(){
        super();
        this._state=false;
        this.render();
    }

    set dataSet(data){
        this._data = data;
        this._state = true;
        this.render();
    }

    set state(state){
        this._state = state;
        this.render();
    }

    render(){
        if(this._state){
            this.innerHTML = `
                <div class="card-modal">
                    <div class="close-modal">
                        <button>❌</button>
                    </div>
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
                    <div class="page-link">
                        <a href="#">Lebih Lanjut</a>
                    </div>
                </div>
            `;
        }else{
            this.innerHTML=``;
        }
    }
}

customElements.define("modal-resto",modalResto);