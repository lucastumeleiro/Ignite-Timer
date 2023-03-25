import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export { App }
