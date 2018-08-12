import {createStackNavigator} from 'react-navigation'
import EStyleSheet from 'react-native-extended-stylesheet'

import HomeScreen from '../screens/Home'
import CurrencyListScreen from '../screens/CurrencyList'
import OptionsScreen from '../screens/Options'
import ThemeScreen from '../screens/Theme'

import configurEStyleSheet from './estylesheet'

configurEStyleSheet()

const styles = EStyleSheet.create({
  $primaryColor: '$primaryBlue',
})

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Options: {
    screen: OptionsScreen
  },
  Theme: {
    screen: ThemeScreen
  },
}, {
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    headerStyle: {
      backgroundColor: styles.$primaryColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})

const AppNavigator = createStackNavigator({
  HomeStack: {
    screen: HomeStack,
    navigationOptions: {
      header: () => null,
    },
  },
  CurrencyList: {
    screen: CurrencyListScreen
  },
}, {
  initialRouteName: 'HomeStack',
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
  // headerMode: 'none',
})

export default AppNavigator
