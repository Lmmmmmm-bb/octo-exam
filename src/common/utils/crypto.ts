import { AES, enc } from 'crypto-ts';

const AES_KEY = 'X_OCTO_EXAM';

export const encrypt = (message: string) =>
  AES.encrypt(message, AES_KEY).toString();

export const decrypt = (message: string) =>
  AES.decrypt(message, AES_KEY).toString(enc.Utf8);
