import ApiRestaurant from '../../../data/restaurant-source';
import CONFIG from '../../../globals/config';
import { separatingObject } from '../../../helpers';
import UrlParser from '../../../routes/url-parser';
import FavoritePresenter from '../favorite/favorite-presenter';
import DbFavoriteRestaurant from '../../../data/favorite-idb';
import { createFeedbackCard } from '../../templates/template-creator';
import { createErrorState, createLoadingSpinner } from '../../templates/load-creator';

class DetailContainer extends HTMLElement {
  constructor() {
    super();
    this._dataset = null;
  }

  connectedCallback() {
    this.loadingState();
    this.getDataDetail();
  }

  async getDataDetail() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const data = await ApiRestaurant.getById(url.id);
      this._dataset = data;

      if (this._dataset.error) {
        this.errorState();
      }

      this.render();
    } catch (err) {
      this.errorState();
      console.error(err.message);
    }
  }

  render() {
    const {
      id,
      pictureId,
      name,
      categories,
      rating,
      address,
      city,
      description,
      menus: {
        foods,
        drinks,
      },
      customerReviews,
    } = this._dataset.restaurant;

    this.innerHTML = `
      <div class="detail-container">
        <div id="favoriteButtonWrapper"></div>

        <div class="detail-main">
          <div class="detail-image">
            <img src="${CONFIG.LARGE_IMAGE_URL}/${pictureId}" alt="${name} Restaurant" width="500" height="400" loading="lazy">
          </div>

          <div class="detail-info">
            <h1 class="detail-title">${name}</h1>
            <div class="detail-rating">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span>${rating}</span>
            </div>
            <div class="detail-address">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>${address}, ${city}</span>
            </div>
            <div class="detail-categories">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
              <span>${separatingObject(categories)}</span>
            </div>
            <div class="detail-description">
              <h2 class="detail-desc-title">Tentang Restoran</h2>
              <p>${description}</p>
            </div>
          </div>
        </div>

        <div class="detail-food-drinks">
          <div class="detail-food">
            <h3>Foods</h3>
            <ol id="foodsList">
            </ol>
          </div>
          <div class="detail-drink">
            <h3>Drinks</h3>
            <ol id="drinksList">
            </ol>
          </div>
        </div>

        <div class="detail-feedback">
          <h2 class="feedback-title">Ulasan Pelanggan</h2>
          <form id="feedbackForm">
            <input id="feedbackName" type="text" placeholder="Nama" name="name">
            <textarea id="feedbackDetail" placeholder="Tulis Ulasan kamu disini" name="comment"></textarea>

            <div id="errorStateForm"></div>

            <button id="submitFeedback" type="submit" aria-label="Tekan untuk beri ulasan">
              Tambahkan Ulasan
            </button>
          </form>
          <div id="feedbackContainer"></div>
        </div>
      </div>
    `;

    const feedbackContainer = this.querySelector('#feedbackContainer');
    const feedbackForm = this.querySelector('#feedbackForm');
    const feedbackName = this.querySelector('#feedbackName');
    const feedbackDetail = this.querySelector('#feedbackDetail');
    const errorStateForm = this.querySelector('#errorStateForm');
    const foodsList = this.querySelector('#foodsList');
    const drinksList = this.querySelector('#drinksList');

    const resetForm = () => {
      feedbackName.value = '';
      feedbackDetail.value = '';
    };

    foods.forEach((item) => {
      foodsList.innerHTML += `<li> ${item.name}</li>`;
    });

    drinks.forEach((item) => {
      drinksList.innerHTML += `<li> ${item.name}</li>`;
    });

    customerReviews.forEach((item) => {
      feedbackContainer.innerHTML += createFeedbackCard(item);
    });

    feedbackForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      errorStateForm.innerHTML = '';

      try {
        const postFeedback = await ApiRestaurant.addFeedback({
          review: feedbackDetail.value,
          name: feedbackName.value,
          id: this._dataset.restaurant.id,
        });

        if (postFeedback.error) {
          errorStateForm.classList.add('feedback-error');
          errorStateForm.innerHTML = 'Ulasan gagal diberikan, silahkan coba lagi setelah beberapa saat';
        } else {
          errorStateForm.classList.remove('feedback-error');
          errorStateForm.innerHTML = 'Ulasan berhasil diberikan';

          feedbackContainer.innerHTML = '';
          postFeedback.customerReviews.forEach((feedback) => {
            feedbackContainer.innerHTML += createFeedbackCard(feedback);
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        resetForm();
      }
    });

    FavoritePresenter.init({
      favoriteModel: DbFavoriteRestaurant,
      favoriteButtonWrapper: document.getElementById('favoriteButtonWrapper'),
      restaurant: {
        pictureId,
        name,
        address,
        city,
        description,
        rating,
        id,
      },
    });
  }

  errorState() {
    this.innerHTML = createErrorState();
  }

  loadingState() {
    this.innerHTML = createLoadingSpinner();
  }
}

customElements.define('detail-container', DetailContainer);
