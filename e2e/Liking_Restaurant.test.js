/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('display empty liked restaurant', ({ I }) => {
  I.seeElement('.no-restaurant');

  I.see('Belum Ada Restorant yang ditambahkan ke favorite', '.no-restaurant-text');
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.card-description');

  const restaurantName = locate('.card-description h2').first();
  const getRestaurantName = await I.grabTextFrom(restaurantName);

  const detailRestaurantButton = locate('.detail-link a').first();
  I.click(detailRestaurantButton);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  I.seeElement('favorite-section');
  I.see(getRestaurantName, '.card-description h2');
});
