import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import HomeScreen from './screens/Home'

// always call EStyleSheet.build() even if you don't use global variables!
EStyleSheet.build({
  $primaryBlue: '#4F6D7A'
})

export default class App extends React.Component {
  render() {
    return (
      <HomeScreen />
    )
  }
}
