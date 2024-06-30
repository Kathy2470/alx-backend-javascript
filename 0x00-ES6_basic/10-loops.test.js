import appendToEachArrayValue from '../10-loops';

describe('appendToEachArrayValue function', () => {
  it('should append correctly to each array element', () => {
    const inputArray = ['appended', 'fixed', 'displayed'];
    const appendString = 'correctly-';
    const expectedArray = ['correctly-appended', 'correctly-fixed', 'correctly-displayed'];

    const result = appendToEachArrayValue(inputArray, appendString);

    expect(result).toEqual(expectedArray);
  });

  it('should handle empty array', () => {
    const inputArray = [];
    const appendString = 'correctly-';
    const expectedArray = [];

    const result = appendToEachArrayValue(inputArray, appendString);

    expect(result).toEqual(expectedArray);
  });

  // Add more test cases as needed
});
