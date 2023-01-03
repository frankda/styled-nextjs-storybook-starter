export type Font = 'default' | 'display'
export type Size = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
export type LineHeight = 'default' | 'tight'
export type Weight = 'default' | 'medium' | 'strong'
export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6'

interface ThemeText {
  font: {
    default: string
    display: string | undefined
  }
  sizeDefault: Size
  size: {
    [size in Size]: {
      s: number
      m?: number | null
      l?: number | null
    }
  }
  lineHeight: {
    [lineHeight in LineHeight]: number
  }
  weight: {
    [weight in Weight]: number
  }
  heading: {
    font?: Font
    weight: Weight
    lineHeight: LineHeight
    level: {
      [level in HeadingLevel]: {
        size: Size
        weight?: Weight
      }
    }
  }
}

const text: ThemeText = {
  font: {
    default: 'system-ui, sans-serif',
    display: undefined,
  },
  sizeDefault: '200',
  size: {
    '100': {
      s: 12,
    },
    '200': {
      s: 14,
    },
    '300': {
      s: 16,
    },
    '400': {
      s: 18,
    },
    '500': {
      s: 21,
    },
    '600': {
      s: 21,
      m: 24,
      l: 24,
    },
    '700': {
      s: 24,
      m: 28,
      l: 28,
    },
    '800': {
      s: 28,
      m: 36,
      l: 36,
    },
    '900': {
      s: 28,
      m: 44,
      l: 44,
    },
  },
  lineHeight: {
    default: 1.4,
    tight: 1.25,
  },
  weight: {
    default: 400,
    medium: 600,
    strong: 700,
  },
  heading: {
    weight: 'strong',
    lineHeight: 'tight',
    level: {
      '1': {
        size: '900',
      },
      '2': {
        size: '700',
      },
      '3': {
        size: '600',
      },
      '4': {
        size: '500',
      },
      '5': {
        size: '400',
      },
      '6': {
        size: '300',
      },
    },
  },
}

export default text
