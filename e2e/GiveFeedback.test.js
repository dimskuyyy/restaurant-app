/* eslint-disable no-undef */
Feature('Give Feedback');

Before(async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('restaurant-list');

  const detailRestaurantButton = locate('.detail-link a').first();
  I.click(detailRestaurantButton);
});

Scenario('Add empty feedback from empty field', async ({ I }) => {
  I.seeElement('#feedbackForm');
  I.fillField('name', '');
  I.fillField('comment', '');
  I.click('#submitFeedback');

  I.dontSee('Ulasan berhasil diberikan', '#errorStateForm');
});

Scenario('Add Feedback To Restaurant', async ({ I }) => {
  I.seeElement('#feedbackForm');
  const feedbackContent = 'Enak Banget Cuy';
  I.fillField('name', 'Nanda');
  I.fillField('comment', feedbackContent);
  I.click('#submitFeedback');
  I.see('Ulasan berhasil diberikan', '#errorStateForm');

  I.see(feedbackContent, '.feedback-content');
});
