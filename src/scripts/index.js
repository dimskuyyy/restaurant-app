import 'regenerator-runtime'; /* for async await transpile */
import '../styles/sass/style.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('nav-bar #dropdown'),
  drawer: document.querySelector('.nav-link'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

/* import './views/components/static/nav-bar';
import './views/components/static/hero-section';
import './views/components/restaurant/restaurant-list';
import './views/components/static/copy-right';
import './views/components/restaurant/modal-resto';

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('#dropdown');
  const dropMenu = document.querySelector('.nav-link');
  const card = document.querySelectorAll('resto-item');
  hamburger.addEventListener('click', () => {
    dropMenu.classList.toggle('open');
  });

  window.addEventListener('click', (event) => {
    if (!event.target.matches('#dropdown')) {
      dropMenu.classList.remove('open');
    }
  });

  card.forEach((target) => {
    target.addEventListener('click', () => {
      const pictureId = target.querySelector('img').src;
      const city = target.querySelector('.card-cover p').textContent;
      const rating = target.querySelector('#rating').textContent;
      const name = target.querySelector('.card-description h2').textContent;
      const description = target.querySelector('.card-description p').textContent;

      const modal = document.createElement('modal-resto');

      modal.dataSet = {
        pictureId, city, rating, name, description,
      };
      document.querySelector('body').appendChild(modal);
    });
  });

  document.addEventListener('click', (event) => {
    const activeModal = document.querySelector('modal-resto');
    if (event.target.matches('.close-modal button')) {
      activeModal.remove();
    }
  });
});
 */
