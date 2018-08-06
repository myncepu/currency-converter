import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

import HomeScreen from './screens/Home'

let {width} = Dimensions.get('window')
// always call EStyleSheet.build() even if you don't use global variables!
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#fff',

  $rem: width > 340 ? 18 : 16
})

export default class App extends React.Component {
  render() {
    return (
      <HomeScreen />
    )
  }
}
