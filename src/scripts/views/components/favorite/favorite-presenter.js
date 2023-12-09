import { createButtonLike, createButtonLiked } from '../../templates/template-creator';

const FavoritePresenter = {
  async init({ favoriteButtonWrapper, favoriteModel, restaurant }) {
    this._favoriteModel = favoriteModel;
    this._restaurant = restaurant;
    this._favoriteButtonWrapper = favoriteButtonWrapper;

    await this._renderFavoriteButton();
  },

  async _isRestaurantLabeledAsFavorite(id) {
    const restaurant = await this._favoriteModel.getRestaurant(id);
    return !!restaurant;
  },

  async _renderFavoriteButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantLabeledAsFavorite(id)) {
      this._displayButtonLiked();
    } else {
      this._displayButtonLike();
    }
  },

  _displayButtonLiked() {
    this._favoriteButtonWrapper.innerHTML = createButtonLiked();
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteModel.deleteRestaurant(this._restaurant.id);
      this._renderFavoriteButton();
    });
  },

  _displayButtonLike() {
    this._favoriteButtonWrapper.innerHTML = createButtonLike();
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteModel.addRestaurant(this._restaurant);
      this._renderFavoriteButton();
    });
  },
};

export default FavoritePresenter;
