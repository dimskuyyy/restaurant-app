import DbFavoriteRestaurant from '../../src/scripts/data/favorite-idb';
import FavoritePresenter from '../../src/scripts/views/components/favorite/favorite-presenter';

const createFavoriteButtonPresenter = async (restaurant) => {
  await FavoritePresenter.init({
    favoriteModel: DbFavoriteRestaurant,
    favoriteButtonWrapper: document.getElementById('favoriteButtonWrapper'),
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonPresenter };
