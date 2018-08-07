import React from 'react'
import {View, StatusBar} from 'react-native'

import {Container} from '../components/Container'
import {Logo} from '../components/Logo'
import {InputWithButton} from '../components/TextInput'
import {ClearButton} from '../components/Buttons'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'CNY'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '700'

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
      }
    }
  }

  handleBaseCurrencyChange = (currency) => {
    /* eslint-disable-next-line */
    console.log(currency)
  }

  reverseCurrencies = () => {
    this.setState({ base: this.state.quote, quote: this.state.base })
  }

  render() {
    return (
      <Container>
        <StatusBar
          translucent={false}
          barStyle="light-content"
        />
        <Logo />
        <InputWithButton
          buttonText={this.state.base.currency}
          defaultValue={this.state.base.price}
          onPress={() => null}
          onChangeText={this.handleBaseCurrencyChange}
        />
        <InputWithButton
          buttonText={this.state.quote.currency}
          value={this.state.quote.price}
          editable={false}
          onPress={() => null}
        />
        <View style={{ marginVertical: 20 }}>
          <ClearButton
            text="Reverse Currencies"
            onPress={this.reverseCurrencies}
          />
        </View>
      </Container>
    )
  }
}

export default HomeScreen
