import "regenerator-runtime"; /* for async await transpile */
import "./component/nav-bar.js";
import "./component/hero-section.js";
import "./component/resto-list.js";
import "./component/copy-right.js";
import "./component/modal-resto.js";
import "../styles/sass/style.scss";


document.addEventListener("DOMContentLoaded",function(){
    const hamburger = document.querySelector('#dropdown');
    const dropMenu = document.querySelector(".nav-link");
    const card = document.querySelectorAll("resto-item");
    hamburger.addEventListener("click",function(){
        dropMenu.classList.toggle("open");
    });

    window.addEventListener("click",function(event){
        if(!event.target.matches('#dropdown')){
            dropMenu.classList.remove("open");
        }
    });

    card.forEach((target)=>{
        target.addEventListener("click",function(){
            const pictureId = target.querySelector('img').src;
            const city = target.querySelector('.card-cover p').textContent;
            const rating = target.querySelector('#rating').textContent;
            const name = target.querySelector('.card-description h2').textContent;
            const description = target.querySelector('.card-description p').textContent;

            const modal = document.createElement("modal-resto");

            modal.dataSet = {pictureId,city,rating,name,description}
            document.querySelector('body').appendChild(modal)
        });
    });

    document.addEventListener("click",function(event){
        const activeModal = document.querySelector('modal-resto');
        event.target.matches('.close-modal button') ? activeModal.remove() : '';
    });
});