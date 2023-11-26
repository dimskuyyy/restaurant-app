import "./resto-item.js";
import data from "../../public/data/DATA.json";

class restoList extends HTMLElement{
    constructor(){
        super();
        // this.shadowDom = this.attachShadow({mode:"open"})
        this.render();
    }

    render(){
        this.innerHTML=``;
        data.restaurants.forEach((item)=>{
            const card = document.createElement('resto-item');
            card.setAttribute("data-id",item.id);
            card.dataSet = item;

            this.appendChild(card);
        });
    }
}

customElements.define("resto-list",restoList);