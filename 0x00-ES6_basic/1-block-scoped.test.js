import taskBlock from './1-block-scoped.js';

describe('taskBlock', () => {
  test('returns [false, true] when trueOrFalse is true', () => {
    expect(taskBlock(true)).toEqual([false, true]);
  });

  test('returns [false, true] when trueOrFalse is false', () => {
    expect(taskBlock(false)).toEqual([false, true]);
  });
});
