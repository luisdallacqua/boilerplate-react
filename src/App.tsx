import React from 'react'
import { ThemeProvider } from 'styled-components'
import Main from './components/Main'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  )
}

export default App
