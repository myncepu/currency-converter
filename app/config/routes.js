import {createStackNavigator} from 'react-navigation'
import EStyleSheet from 'react-native-extended-stylesheet'

import HomeScreen from '../screens/Home'
import CurrencyListScreen from '../screens/CurrencyList'
import OptionsScreen from '../screens/Options'
import ThemesScreen from '../screens/Themes'

import configurEStyleSheet from './estylesheet'

configurEStyleSheet({ theme: 'green', primaryColor: 'green' })

const styles = EStyleSheet.create({
  $themeColor: '$primaryColor',
})

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Options: {
    screen: OptionsScreen
  },
  Theme: {
    screen: ThemesScreen
  },
}, {
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    headerStyle: {
      backgroundColor: styles.$themeColor,
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
      backgroundColor: styles.$themeColor,
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
