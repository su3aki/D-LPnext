import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

export default function MyThemeProvider({ children }) {

  const theme = createMuiTheme({});

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
  )
}
