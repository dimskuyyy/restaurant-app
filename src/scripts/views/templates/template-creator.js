/* eslint-disable arrow-body-style */
import CONFIG from '../../globals/config';

const createRestaurantCard = (restaurant) => {
  return `
  <article>
    <div class="card-cover">
      <img src="${CONFIG.MEDIUM_IMAGE_URL}/${restaurant.pictureId}" alt="Preview ${restaurant.name}">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
        <span>${restaurant.city}</span>
      </div>
    </div>
    <div class="card-content">
      <div id="rating">
        <span>Rating : ${restaurant.rating}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="card-description">
          <h2>${restaurant.name}</h2>
          <p>${restaurant.description}</p>
      </div>
    </div>
    <div class="detail-link">
      <a href="/#/restaurant/${restaurant.id}">Lihat Detail</a>
    </div>
  </article>
  `;
};

const createFeedbackCard = (feedback) => {
  return `
    <div class="feedback-list">
      <div class="feedback-info">
        <span class="feedback-name">${feedback.name}, </span>
        <span class="feedback-date">${feedback.date}</span>
      </div>
      <p class="feedback-content">${feedback.review}</p>
    </div>
  `;
};

const createButtonLiked = () => {
  return `
    <button id="favoriteButton" class="favorite-active" aria-label="remove from favorite">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="heart-active">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
    </button>
  `;
};

const createButtonLike = () => {
  return `
    <button id="favoriteButton" class="favorite-inactive" aria-label="add to favorite">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="heart-inactive">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    </button>
  `;
};

const createWarn = (message) => {
  return `
    <div class="no-restaurant">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="warn-svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>

      <p>${message}</p>
    </div>
  `;
};

export {
  createRestaurantCard,
  createFeedbackCard,
  createButtonLiked,
  createButtonLike,
  createWarn,
};
