import './vendor'; /* for async await transpile */
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
