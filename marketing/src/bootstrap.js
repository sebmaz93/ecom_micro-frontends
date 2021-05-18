import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el)
}

// if we are in dev mode or isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('marketing-dev-root')

  if (root) {
    mount(root)
  }
}

// when running through container (micro frontends)
export { mount }
