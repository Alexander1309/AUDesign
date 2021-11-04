import React from 'react'
import ReactDOM from 'react-dom'
import { AuthProvider } from './contexts/authContext'
import { LangProvider } from './contexts/langContext'
import Routers from './Routers'
import StylesGlobals from './StylesGlobals'

ReactDOM.render(
  <AuthProvider>
    <LangProvider>
      <StylesGlobals />
      <Routers />
    </LangProvider>
  </AuthProvider>, 
  document.getElementById('app')
)
