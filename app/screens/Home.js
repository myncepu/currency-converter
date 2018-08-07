import React from 'react'
import {StatusBar} from 'react-native'

import {Container} from '../components/Container'
import {Logo} from '../components/Logo'
import {InputWithButton} from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'CNY'
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
          onPress={() => null}
          onChangeText={this.handleBaseCurrencyChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          value={TEMP_QUOTE_PRICE}
          editable={false}
          onPress={() => null}
        />
      </Container>
    )
  }
}

export default HomeScreen
