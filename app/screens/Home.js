import React from 'react'
import {StatusBar} from 'react-native'

import {Container} from '../components/Container'
import {Logo} from '../components/Logo'
import {InputWithButton} from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'USD'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '700'

class HomeScreen extends React.Component {
  handleBaseCurrencyChange = (currency) => {
    /* eslint-disable-next-line */
    console.log(currency)
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
          buttonText={TEMP_BASE_CURRENCY}
          defaultValue={TEMP_BASE_PRICE}
          onPress={() => alert('TEMP_BASE_CURRENCY pressed!')}
          onChangeText={this.handleBaseCurrencyChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          value={TEMP_QUOTE_PRICE}
          editable={false}
          onPress={() => alert('TEMP_QUOTE_CURRENCY pressed!')}
        />
      </Container>
    )
  }
}

export default HomeScreen
