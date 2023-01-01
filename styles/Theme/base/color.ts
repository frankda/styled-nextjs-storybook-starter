const basePalette = {
  neutral45: '#ffffff',
  neutral50: '#ffffff',
  neutral100: '#f6f6f6',
  neutral200: '#dadada',
  neutral250: '#dadada',
  neutral300: '#c0c0c0',
  neutral350: '#c0c0c0',
  neutral400: '#a6a6a6',
  neutral500: '#8c8c8c',
  neutral600: '#6d6d6d',
  neutral650: '#606060',
  neutral700: '#4f4f4f',
  neutral750: '#424242',
  neutral800: '#303030',
  neutral900: '#141414',

  blackTransparent100: 'rgba(0, 0, 0, 0.04)',
  blackTransparent200: 'rgba(0, 0, 0, 0.15)',
  blackTransparent300: 'rgba(0, 0, 0, 0.25)',
  blackTransparent400: 'rgba(0, 0, 0, 0.35)',
  blackTransparent500: 'rgba(0, 0, 0, 0.45)',
  blackTransparent600: 'rgba(0, 0, 0, 0.57)',
  blackTransparent700: 'rgba(0, 0, 0, 0.69)',
  blackTransparent800: 'rgba(0, 0, 0, 0.81)',
  blackTransparent900: 'rgba(0, 0, 0, 0.92)',

  whiteTransparent100: 'rgba(255, 255, 255, 0.08)',
  whiteTransparent200: 'rgba(255, 255, 255, 0.19)',
  whiteTransparent300: 'rgba(255, 255, 255, 0.31)',
  whiteTransparent400: 'rgba(255, 255, 255, 0.43)',
  whiteTransparent500: 'rgba(255, 255, 255, 0.55)',
  whiteTransparent600: 'rgba(255, 255, 255, 0.65)',
  whiteTransparent700: 'rgba(255, 255, 255, 0.75)',
  whiteTransparent800: 'rgba(255, 255, 255, 0.86)',
  whiteTransparent900: 'rgba(255, 255, 255, 0.96)',

  blue100: '#fafcff',
  blue200: '#cce5ff',
  blue300: '#99ccff',
  blue400: '#66b3ff',
  blue500: '#0076D6',
  blue600: '#297acc',
  blue700: '#1f5c99',
  blue800: '#143d66',

  green700: '#00c200',
  green800: '#008f00',

  red650: '#990000',
  red700: '#800000',
  red750: '#660000',

  black: '#000000',
  white: '#ffffff',
  green: '#00c200',
  red: '#ff4d4d',
  orange: '#ff9500',

  brand: '#3399ff',
  brandTwitter: '#34b7ea',
  brandFacebook: '#3c5999',
}

type Palette = typeof basePalette

interface Alias {
  valid: string
  invalid: string
  warning: string

  textDefault: string
  textSecondary: string
  textTertiary: string

  textDefaultWhite: string
  textSecondaryWhite: string
  textTertiaryWhite: string

  backgroundDefault: string
  backgroundSecondary: string
  backgroundReversed: string
  backgroundTertiary: string

  border: string
  borderDivision: string
  borderField: string
  borderFocus: string
  borderHover: string
  borderWhite: string

  buttonTextDefault: string
  buttonTextSecondary: string
  buttonTextTertiary: string
  buttonTextTertiaryLink: string
  buttonTextTertiaryDanger: string

  modalBackground: string
}

interface Color extends Palette, Alias {
  iconDefault: string
}

export default (overrides?: Partial<Color>): Color => {
  const palette: Palette = {
    ...basePalette,
    ...overrides,
  }

  const aliases: Alias = {
    valid: palette.green,
    invalid: palette.red,
    warning: palette.orange,

    textDefault: palette.neutral800,
    textSecondary: palette.neutral600,
    textTertiary: palette.neutral400,

    textDefaultWhite: palette.white,
    textSecondaryWhite: palette.whiteTransparent800,
    textTertiaryWhite: palette.whiteTransparent400,

    backgroundDefault: palette.white,
    backgroundSecondary: palette.neutral100,
    backgroundReversed: palette.black,
    backgroundTertiary: palette.neutral100,

    border: palette.neutral200,
    borderDivision: palette.neutral300,
    borderField: palette.neutral300,
    borderFocus: palette.brand,
    borderHover: palette.neutral300,
    borderWhite: palette.whiteTransparent200,

    buttonTextDefault: palette.neutral800,
    buttonTextSecondary: palette.neutral600,
    buttonTextTertiary: palette.neutral600,
    buttonTextTertiaryLink: palette.blue600,
    buttonTextTertiaryDanger: palette.red,

    modalBackground: palette.blackTransparent200,
  }

  return {
    ...palette,
    ...aliases,

    iconDefault: aliases.textSecondary,

    ...overrides,
  }
}
