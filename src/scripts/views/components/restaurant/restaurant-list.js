import { createErrorState, createRestaurantCardSkeleton } from '../../templates/load-creator';
import { createRestaurantCard } from '../../templates/template-creator';
import ApiRestaurant from '../../../data/restaurant-source';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this._data = undefined;
  }

  connectedCallback() {
    this.loadState();
    this.getDataList();
  }

  async getDataList() {
    try {
      const data = await ApiRestaurant.getAll();
      this._data = data;

      if (!this._data.error) {
        this.render();
      } else {
        this.errorState();
      }
    } catch (err) {
      this.errorState();
      console.error(err.message);
    }
  }

  render() {
    this.innerHTML = '';
    this._data.restaurants.forEach((restaurant) => {
      const card = createRestaurantCard(restaurant);
      this.innerHTML += card;
    });
  }

  errorState() {
    this.innerHTML = createErrorState();
  }

  loadState() {
    this.innerHTML = createRestaurantCardSkeleton(6);
  }
}

customElements.define('restaurant-list', RestaurantList);
