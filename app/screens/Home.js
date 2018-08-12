import React from 'react'
import { Dimensions, KeyboardAvoidingView, TouchableOpacity, View, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import {Container} from '../components/Container'
import {Logo} from '../components/Logo'
import {InputWithButton} from '../components/TextInput'
import {ClearButton} from '../components/Buttons'
import {LastConverted} from '../components/Text'
import * as currencyActions from '../actions/currencies'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'CNY'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '700'

const {width} = Dimensions.get('window')

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      base: {
        currency: TEMP_BASE_CURRENCY,
        price: TEMP_BASE_PRICE,
      },
      quote: {
        currency: TEMP_QUOTE_CURRENCY,
        price: TEMP_QUOTE_PRICE,
      },
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <TouchableOpacity
          style={{ paddingVertical: 5, paddingHorizontal: 20 }}
          onPress={() => navigation.navigate('Options')}
        >
          <Icon
            name="ios-settings"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      ),
    }
  }

  changeCurrencyAmount = (amount) => {
    /* eslint-disable-next-line */
    console.log(currencyActions.changeCurrencyAmount(amount))
  }

  swapCurrency = () => {
    this.setState({ base: this.state.quote, quote: this.state.base })
    // eslint-disable-next-line
    console.log(currencyActions.swapCurrency())
  }

  render() {
    return (
      <Container>
        <StatusBar
          translucent={false}
          barStyle="light-content"
        />
        <KeyboardAvoidingView
          behavior="position"
          enabled
          style={{ flex: 1, width, justifyContent: 'center', alignItems: 'center' }}
        >
          <Logo />
          <InputWithButton
            buttonText={this.state.base.currency}
            defaultValue={this.state.base.price}
            onPress={() => this.props.navigation.navigate('CurrencyList', {
              currentCurrency: this.state.base.currency,
              title: 'Base currency',
            })}
            onChangeText={this.changeCurrencyAmount}
          />
          <InputWithButton
            buttonText={this.state.quote.currency}
            value={this.state.quote.price}
            editable={false}
            onPress={() => this.props.navigation.navigate('CurrencyList', {
              currentCurrency: this.state.quote.currency,
              title: 'Quote currency',
            })}
          />
          <LastConverted
            baseCurrency={this.state.base.currency}
            quoteCurrency={this.state.quote.currency}
            conversion={7}
            date={new Date()}
          />
          <View style={{ marginVertical: 20 }}>
            <ClearButton
              text="Reverse Currencies"
              onPress={this.swapCurrency}
            />
          </View>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default HomeScreen
