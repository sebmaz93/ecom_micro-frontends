import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App.js'

// Mount function to start the app
const mount = (
  el,
  { onAuthChange, onNavigate, defaultHistory, initialPath }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    })

  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App onAuthChange={onAuthChange} history={history} />, el)

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    },
  }
}

// if we are in dev mode or isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('auth-dev-root')

  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() })
  }
}

// when running through container (micro frontends)
export { mount }
