import { merge } from 'lodash'
import type { DeepPartial } from 'types'
import animation from './animation'
import breakpoint from './breakpoint'
import color from './color'
import radius from './radius'
import space from './space'
import text from './text'
import zIndex from './z-index'

export interface BaseTheme {
  animation: typeof animation
  breakpoint: typeof breakpoint
  color: ReturnType<typeof color>
  name: string
  radius: typeof radius
  space: typeof space
  text: typeof text
  zIndex: typeof zIndex
}

export const createTheme = <OverridesType extends DeepPartial<BaseTheme>>(
  overrides?: OverridesType,
): BaseTheme & OverridesType =>
    merge(
      {},
      {
        animation,
        breakpoint,
        name: 'base',
        radius,
        space,
        text,
        zIndex,
      },
      overrides,
      {
        color: color(overrides && overrides.color),
      },
    )
