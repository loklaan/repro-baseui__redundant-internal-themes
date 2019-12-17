import React from 'react'
import App from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { ThemeProvider } from 'baseui'
import { styletron, debug } from '../styletron'
import { appTheme } from '../theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <ThemeProvider value={appTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyletronProvider>
    )
  }
}
