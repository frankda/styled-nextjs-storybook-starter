import type { BaseTheme } from './base'
import type { Space } from './base/space'
import type { Font, Size, Weight, LineHeight, HeadingLevel } from './base/text'

export interface Theme extends BaseTheme {}

export type ThemeBreakpoint = keyof Theme['breakpoint']
export type ThemeColor = keyof Theme['color']
export type ThemeRadius = keyof Theme['radius']
export type ThemeSpace = Space
export type ThemeTextFont = Font
export type ThemeTextSize = Size
export type ThemeTextWeight = Weight
export type ThemeTextLineHeight = LineHeight
export type ThemeTextHeadingLevel = HeadingLevel

