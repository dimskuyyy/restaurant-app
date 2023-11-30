import { createRestaurantCard, createWarn } from '../../templates/template-creator';
import { createRestaurantCardSkeleton } from '../../templates/load-creator';
import DbFavoriteRestaurant from '../../../data/favorite-idb';

class FavoriteSection extends HTMLElement {
  constructor() {
    super();
    this._card = [];
  }

  connectedCallback() {
    this.loadState();
    this.getFavoriteRestaurant();
  }

  async getFavoriteRestaurant() {
    try {
      const restaurant = await DbFavoriteRestaurant.getAllRestaurant();
      this._card = restaurant;

      if (!restaurant.length) {
        this.renderNoRestaurant();
      } else {
        this.render();
      }
    } catch (err) {
      this.errorState();
      console.error(err.message);
    }
  }

  render() {
    this.innerHTML = '';
    this._card.forEach((item) => {
      this.innerHTML += createRestaurantCard(item);
    });
  }

  errorState() {
    this.innerHTML = createWarn('Ada sesuatu yang salah, silahkan cek koneksi anda kembali');
  }

  renderNoRestaurant() {
    this.innerHTML = createWarn('Belum Ada Restorant yang ditambahkan ke favorite');
  }

  loadState() {
    this.innerHTML = createRestaurantCardSkeleton(6);
  }
}

customElements.define('favorite-section', FavoriteSection);
