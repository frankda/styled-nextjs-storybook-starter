import { addDecorator } from "@storybook/react"
import { withThemesProvider } from "storybook-addon-styled-component-theme"
import { ThemeProvider } from "styled-components"
import { themes } from "../styles/Theme/SiteConfigProvider"

// https://storybook.js.org/addons/storybook-addon-styled-component-theme
addDecorator(withThemesProvider(Object.values(themes)), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}