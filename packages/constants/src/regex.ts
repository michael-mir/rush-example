export const REGEX = {
    NAME: "[А-Яа-яЁёA-Za-z\\-'`\\s]",
    FULL_NAME: "[А-Яа-яЁёA-Za-z \\-'`\\s]",
    NAME_LATIN: "[A-Za-z\\-'`\\s]",
    NAME_CYRILLIC: "[А-Яа-яЁё\\-'`\\s]",

    CITY: '[0-9А-Яа-яЁёA-Za-z,.\\-\\s-]',
    CITY_CYRILLIC: '[0-9А-Яа-яЁё,.\\-\\s-]',
    CITY_LATIN: '[0-9A-Za-z,.\\s-]',

    IDENTITY_CARD: '[0-9А-Яа-яЁёA-Za-z/\\s-]',
    IDENTITY_CARD_CYRILLIC: '[0-9А-Яа-яЁё/\\s-]',
    IDENTITY_CARD_LATIN: '[0-9A-Za-z/\\s-]',

    LINE: "[0-9А-Яа-яЁёA-Za-z-`':;_#,./\\s-]",
    LINE_CYRILLIC: "[0-9А-Яа-яЁё`':;_#,./\\s-`]",
    LINE_LATIN: '[0-9A-Za-z`:;_#,./\\s-`]',

    ISSUER: '[0-9А-Яа-яЁёA-Za-z.,;/\\s-/\\\\/]',
    ISSUER_CYRILLIC: '[0-9А-Яа-яЁё.,;/\\s-/\\\\/]',
    ISSUER_LATIN: '[0-9A-Za-z.,;/\\s-/\\/]',

    POSTAL_CODE: '[0-9A-Za-z\\s-]',

    START_SPECIAL_SYMBOLS: "[\\-\\_/|\\,.:;'`]",
    END_SPECIAL_SYMBOLS: '[\\-\\_/|\\,:#]',

    ALPHABETS: '[А-Яа-яЁёA-Za-z]',
    LATIN: '[A-Za-z]',
    CYRILLIC: '[А-Яа-яЁё]',
    FULL_LATIN: "[0-9A-Za-z`#\\-\\_/|\\\\,.:;'/\\s-]",
    FULL_CYRILLIC: "[0-9А-Яа-яЁё`#\\-\\_/|\\\\,.:;'/\\s-]",
    AVAILABLE_CHARS: "[0-9A-Za-zА-Яа-яЁё`#\\-\\_/|\\\\,.:;'/\\s-]",

    NUMBERS: '[0-9]',
    NUMBERS_WITHOUT_NULL: '[1-9]',
    NUMBERS_AND_CYRILLIC: '[\\s-\\/0-9ЁА-Яа-яё]',
    NUMBERS_AND_LATIN: '[A-Za-z0-9\\s-]',
    NUMBERS_AND_ALPHABETS: '[\\s-\\/0-9A-Za-zЁА-Яа-яё]',
    EMAIL: "[0-9А-Яа-яЁёA-Za-z\\@\\.\\!\\\\\\$\\&\\*\\-\\=\\^\\`\\|\\~\\#\\%\\'\\+\\/\\?\\_\\{\\}]",

    CREDIT_CARD_PAN: "^(\\d{4}) (\\d{4}) (\\d{4}) (\\d{4,7})$"
} as const;
