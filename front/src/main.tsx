import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './pages/Routes'
import '$styles/global.sass'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)
