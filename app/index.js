import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'
import {createStackNavigator} from 'react-navigation'

import HomeScreen from './screens/Home'
import CurrencyListScreen from './screens/CurrencyList'

let {width} = Dimensions.get('window')
// always call EStyleSheet.build() even if you don't use global variables!
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#fff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#D9D9D9',

  $rem: width > 340 ? 18 : 16,

  // $outline: 1, // outline all components that are using EStyleSheet
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  CurrencyList: {
    screen: CurrencyListScreen
  },
}, {
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    headerStyle: {
      backgroundColor: EStyleSheet.globalVars.$primaryBlue,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  mode: 'modal',
})

export default AppNavigator
