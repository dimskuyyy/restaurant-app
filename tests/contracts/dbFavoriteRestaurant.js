/* eslint-disable no-undef */
const itActsAsFavoriteModel = (favorite) => {
  it('should return all restaurants that have been added to the restaurant list', async () => {
    favorite.addRestaurant({ id: 1 });
    favorite.addRestaurant({ id: 2 });
    favorite.addRestaurant({ id: 3 });

    expect(await favorite.getAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should return a restaurant that have been added to the favorites list', async () => {
    favorite.addRestaurant({ id: 2 });
    favorite.addRestaurant({ id: 1 });

    expect(await favorite.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favorite.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favorite.getRestaurant(3)).toEqual(undefined);
  });

  it('should reject a restaurant from being added to the restaurant list if it does not have the correct properties', async () => {
    favorite.addRestaurant({ unknownProperty: 'unknown property' });

    expect(await favorite.getAllRestaurant()).toEqual([]);
  });

  it('should handle requests to remove a restaurant from the restaurant list even if it has not been added to the list', async () => {
    favorite.addRestaurant({ id: 1 });
    favorite.addRestaurant({ id: 2 });
    favorite.addRestaurant({ id: 3 });

    await favorite.deleteRestaurant(5);

    expect(await favorite.getAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should delete restaurant from restaurant list', async () => {
    favorite.addRestaurant({ id: 1 });
    favorite.addRestaurant({ id: 2 });
    favorite.addRestaurant({ id: 3 });

    await favorite.deleteRestaurant(3);

    expect(await favorite.getAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });
};

export default itActsAsFavoriteModel;
