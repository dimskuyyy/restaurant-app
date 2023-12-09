/* eslint-disable no-undef */
import DbFavoriteRestaurant from '../src/scripts/data/favorite-idb';
import itActsAsFavoriteModel from './contracts/dbFavoriteRestaurant';

describe('Implement DB Favorite Restaurant', () => {
  afterEach(async () => {
    const restaurants = await DbFavoriteRestaurant.getAllRestaurant();
    restaurants.forEach(async (restaurant) => {
      await DbFavoriteRestaurant.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteModel(DbFavoriteRestaurant);
});
