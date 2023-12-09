/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import DbFavoriteRestaurant from '../src/scripts/data/favorite-idb';

describe('put the restaurant on the favorite list', () => {
  const addFavoriteButtonWrapper = () => {
    document.body.innerHTML = `
      <div id="favoriteButtonWrapper"></div>
    `;
  };

  beforeEach(() => {
    addFavoriteButtonWrapper();
  });

  it('should be able to add restaurants to the favorites list', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    const restaurant = await DbFavoriteRestaurant.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await DbFavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not be able to add a restaurant to the favorites list when it is already in it', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    await DbFavoriteRestaurant.addRestaurant({ id: 1 });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    const restaurant = await DbFavoriteRestaurant.getAllRestaurant();
    expect(restaurant).toEqual([{ id: 1 }]);

    await DbFavoriteRestaurant.deleteRestaurant(1);
  });

  it('Should be able to display the add to favorites button when the restaurant has not been labeled', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('.favorite-inactive')).toBeTruthy();
  });

  it('Should not be able to display the add to favorites button when the restaurant is already labeled as a favorite', async () => {
    await TestFactories.createFavoriteButtonPresenter({ id: 1 });
    expect(document.querySelector('.favorite-active')).toBeFalsy();
  });

  it('should not add a restaurant into favorite that has no ID Restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenter({});
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    expect(await DbFavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
