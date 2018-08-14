import React from 'react'
import App from './config/routes'
import { AlertProvider } from './components/Alert'
import { Provider } from 'react-redux'

import store from './store'

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <App />
    </AlertProvider>
  </Provider>
)
