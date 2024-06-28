import { taskFirst, taskNext } from '../0-constants.js';

describe('taskFirst', () => {
  test('should return correct string', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });
});

describe('taskNext', () => {
  test('should return correct string', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
