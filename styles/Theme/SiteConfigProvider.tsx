import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './default'
import { Theme } from '../index'

const themeMapping: Record<string, Theme> = {
  default: defaultTheme
}

const getSiteTheme = (themeName: string): Theme => {
  if (themeMapping[themeName]) {
    return themeMapping[themeName]
  } else {
    console.error(`The theme name ${themeName} is not defined, fallback to default theme`)
    return themeMapping.default
  }
}

export const SiteConfigContext = createContext({} as React.Dispatch<string>)

const SiteConfigProvider = ({ children }: { children: React.ReactElement}) => {
  const [ currentTheme, setCurrentTheme ] = useState('default')

  return (
    <SiteConfigContext.Provider value={setCurrentTheme}>
      <ThemeProvider theme={getSiteTheme(currentTheme)}>
        { children }
      </ThemeProvider>
    </SiteConfigContext.Provider>
  )
}

export const useUpdateTheme = () => useContext(SiteConfigContext)
export default SiteConfigProvider