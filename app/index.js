import React from 'react'
import App from './config/routes'
import { AlertProvider } from './components/Alert'

export default () => <AlertProvider><App /></AlertProvider>
