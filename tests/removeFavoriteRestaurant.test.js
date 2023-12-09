/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import DbFavoriteRestaurant from '../src/scripts/data/favorite-idb';

describe('Remove Favorite Restaurant', () => {
  const addFavoriteButtonWrapper = () => {
    document.body.innerHTML = "<div id='favoriteButtonWrapper'></div>";
  };

  beforeEach(async () => {
    addFavoriteButtonWrapper();
    await DbFavoriteRestaurant.addRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await DbFavoriteRestaurant.deleteRestaurant(1);
  });

  it('should be able to remove restaurants from the favorites list', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await DbFavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it('Should be able to display the remove from favorites button when the restaurant is already labeled', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    expect(document.querySelector('.favorite-active')).toBeTruthy();
  });

  it('Should not be able to display the add to favorites button when the restaurant is already labeled as a favorite.', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    expect(document.querySelector('.favorite-inactive')).toBeFalsy();
  });

  it('should not throw error when click remove from favorite button if the unlist restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });

    await DbFavoriteRestaurant.deleteRestaurant(1);

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await DbFavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
