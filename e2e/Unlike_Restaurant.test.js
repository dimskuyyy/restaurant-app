/* eslint-disable no-undef */
Feature('Unlike Restaurant');

Before(async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('restaurant-list');

  const detailRestaurantButton = locate('.detail-link a').first();
  I.click(detailRestaurantButton);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
});

Scenario('Remove one Restaurant from Favorite List', ({ I }) => {
  I.seeElement('favorite-section');
  const detailRestaurantButton = locate('.detail-link a').first();
  I.click(detailRestaurantButton);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');

  I.seeElement('.no-restaurant');

  I.see('Belum Ada Restorant yang ditambahkan ke favorite', '.no-restaurant-text');
});
