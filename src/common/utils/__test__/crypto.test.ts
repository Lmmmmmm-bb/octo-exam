import { test, expect } from 'vitest';
import { encrypt, decrypt } from '../crypto';

const ENCRPT = 'encrpt';

test('crypto util test', () => {
  const encryptString = encrypt(ENCRPT);

  expect(decrypt(encryptString)).toBe(ENCRPT);
});
