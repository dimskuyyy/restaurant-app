import DbFavoriteRestaurant from '../../../data/favorite-idb';
import { createButtonLike, createButtonLiked } from '../../templates/template-creator';
import ApiRestaurant from '../../../data/restaurant-source';

class FavoriteButton extends HTMLElement {
  constructor() {
    super();
    this._ID = this.getAttribute('data-id');
    this._restaurant = null;
    this._isLiked = false;
  }

  async _getRestaurant() {
    try {
      const data = await ApiRestaurant.getById(this._ID);
      const {
        categories,
        customerReviews,
        menus,
        ...others
      } = data.restaurant;

      this._restaurant = others;
    } catch (err) {
      console.error(err);
    }
  }

  async _checkLiked() {
    try {
      const restaurant = await DbFavoriteRestaurant.getRestaurant(this._ID);
      this._isLiked = Boolean(restaurant);

      if (this._isLiked) {
        this._renderLikedState();
      } else {
        this._renderLikeState();
      }
    } catch (error) {
      console.error(error);
    }
  }

  connectedCallback() {
    this._getRestaurant();
    this.render();
  }

  render() {
    this._checkLiked();
  }

  _renderLikedState() {
    this.innerHTML = createButtonLiked();

    const favoriteButton = this.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await DbFavoriteRestaurant.deleteRestaurant(this._ID);
      this.render();
    });
  }

  _renderLikeState() {
    this.innerHTML = createButtonLike();

    const favoriteButton = this.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await DbFavoriteRestaurant.addRestaurant(this._restaurant);
      this.render();
    });
  }
}

customElements.define('favorite-button', FavoriteButton);
