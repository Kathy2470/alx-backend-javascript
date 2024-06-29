import getNeighborhoodsList from '../2-arrow';

describe('getNeighborhoodsList', () => {
  let neighborhoodsList;

  beforeEach(() => {
    neighborhoodsList = new getNeighborhoodsList();
  });

  test('should add a new neighborhood to the list', () => {
    const newNeighborhood = 'Noe Valley';
    const expectedNeighborhoods = ['SOMA', 'Union Square', newNeighborhood];

    neighborhoodsList.addNeighborhood(newNeighborhood);

    expect(neighborhoodsList.sanFranciscoNeighborhoods).toEqual(expectedNeighborhoods);
  });

  test('should return the updated neighborhoods list', () => {
    const newNeighborhood = 'Noe Valley';
    const expectedNeighborhoods = ['SOMA', 'Union Square', newNeighborhood];

    const result = neighborhoodsList.addNeighborhood(newNeighborhood);

    expect(result).toEqual(expectedNeighborhoods);
  });
});
