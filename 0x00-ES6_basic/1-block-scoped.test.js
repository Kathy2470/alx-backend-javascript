import taskBlock from './1-block-scoped.js';

describe('taskBlock function', () => {
  it('should return [true, false] when trueOrFalse is true', () => {
    const result = taskBlock(true);
    expect(result).toEqual([true, false]);
  });

  it('should return [false, true] when trueOrFalse is false', () => {
    const result = taskBlock(false);
    expect(result).toEqual([false, true]);
  });
});
