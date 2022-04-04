import { test, expect, vi } from 'vitest';
import { copyable } from '../copy';

test('copyable should be called', () => {
  Object.assign(navigator, {
    clipboard: {
      writeText: vi.fn().mockImplementation(() => Promise.resolve())
    }
  });
  const writeText = vi.spyOn(navigator.clipboard, 'writeText');
  copyable('copy');

  expect(writeText).toBeCalled();
  expect(writeText).toBeCalledWith('copy');

  copyable('copy second');
  expect(writeText).toBeCalledTimes(2);
  expect(writeText).toBeCalledWith('copy second');
});

test('copyable should not be called', () => {
  const writeText = vi.spyOn(navigator.clipboard, 'writeText');

  Object.assign(navigator, { clipboard: undefined });
  copyable('copy third');
  expect(writeText).not.toBeCalled();
});
