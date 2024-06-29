import taskBlock from '../1-block-scoped';

describe('taskBlock function', () => {
  it('should return [true, true] when trueOrFalse is true', () => {
    const result = taskBlock(true);
    expect(result).toEqual([true, true]);
  });

  it('should return [false, true] when trueOrFalse is false', () => {
    const result = taskBlock(false);
    expect(result).toEqual([false, true]);
  });

  it('should ensure task2 remains true even when trueOrFalse is true', () => {
    const result = taskBlock(true);
    expect(result[1]).toBe(true);
  });
});
