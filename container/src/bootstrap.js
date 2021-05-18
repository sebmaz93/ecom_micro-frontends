import React from 'react'
import ReactDOM from 'react-dom'

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(<h1>Jo</h1>, el)
}

// if we are in dev mode or isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('container-dev-root')

  if (root) {
    mount(root)
  }
}

// when running through container (micro frontends)
export { mount }
