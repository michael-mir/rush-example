export const ALPHABETS = {
  CYRILLIC: 'cyrillic',
  LATIN: 'latin'
} as const;

export const MASK = {
  PAN: '**** **** **** *******',
  EXPIRATION_DATE: '** / **',
  EXPIRATION_DATE_CHAR_PLACEHOLDER: '_',
  CVV: '999'
};

export const MIN_VALUES = {
  AGE: 18,
  AGE_RESIDENT: 21,
  INCOME: 1
} as const;

export const MAX_VALUES = {
  AGE: 75,
  INCOME: 999999999
} as const;

export const MIN_LENGTH = {
  DEFAULT: 2,
  PHONE_NUMBER: 11,
  NAME: 2,
  OTP: 4,
  SERIES_NUMBER: 10,
  TEXTAREA: 3,
  BIN: 6,
  PAN: 16,
  EXPIRATION_DATE: 4,
  CVV: 3
} as const;

export const MAX_LENGTH = {
  DEFAULT: 55,
  NAME: 55,
  OTP: 4,
  TEXTAREA: 255,
  BIN: 9,
  PAN: 19,
  EXPIRATION_DATE: 4,
  CVV: 3
} as const;

export const MIN_DATE = new Date('1900-01-01T00:00:00.000');

export const OTP_LENGTH = 6;
