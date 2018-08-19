import React from 'react'
import { View } from 'react-native'
import App from './config/routes'
import { AlertProvider } from './components/Alert'
import { Provider } from 'react-redux'
import DropdownAlert from 'react-native-dropdownalert'

import store from './config/store'
import { DropDownHolder }from './utils/DropDownHolder'

export default () => (
  <View style={{width: '100%', height: '100%'}}>
    <Provider store={store}>
      <AlertProvider>
        <App />
      </AlertProvider>
    </Provider>
    <DropdownAlert ref={(ref) => DropDownHolder.setDropDown(ref)} />
  </View>
)
