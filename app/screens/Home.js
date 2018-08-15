import React from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import {Container} from '../components/Container'
import {Logo} from '../components/Logo'
import {InputWithButton} from '../components/TextInput'
import {ClearButton} from '../components/Buttons'
import {LastConverted} from '../components/Text'
import * as currencyActions from '../actions/currencies'
import {initialState} from '../reducers/themes'

const {width} = Dimensions.get('window')

const styles = EStyleSheet.create({
  clearButton: {
    paddingVertical: '0.4rem',
    marginBottom: '4rem',
  }
})

class HomeScreen extends React.Component {
  static propTypes = {
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    primaryColor: PropTypes.string,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.string,

    swapCurrency: PropTypes.func,
    changeCurrencyAmount: PropTypes.func,
  }

  static navigationOptions = ({ navigation }) => {
    const {state} = navigation
    return {
      title: '',
      headerStyle: {
        backgroundColor: state.params && state.params.primaryColor ? state.params.primaryColor : initialState.color,
        borderBottomWidth: 0,
      },
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

  componentDidMount() {
    this.props.navigation.setParams({ primaryColor: this.props.primaryColor })
  }

  componentDidUpdate(nextProps) {
    if (nextProps.primaryColor !== this.props.primaryColor) {
      this.props.navigation.setParams({ primaryColor: this.props.primaryColor })
    }
  }

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      amount,
      primaryColor,
      conversionRate,
      isFetching,
      lastConvertedDate,

      changeCurrencyAmount,
      swapCurrency,
    } = this.props

    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar
          translucent={false}
          barStyle="light-content"
        />
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={{ flex: 1, width, justifyContent: 'center', alignItems: 'center' }}
        >
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            defaultValue={String(amount)}
            onPress={() => this.props.navigation.navigate('CurrencyList', {
              title: 'Base currency',
              type: 'base',
            })}
            onChangeText={changeCurrencyAmount}
            textColor={primaryColor}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            value={
              isFetching
                ? '...'
                : (amount*conversionRate).toFixed(2).toString()
            }
            editable={false}
            onPress={() => this.props.navigation.navigate('CurrencyList', {
              title: 'Quote currency',
              type: 'quote',
            })}
            textColor={primaryColor}
          />
          <LastConverted
            baseCurrency={baseCurrency}
            quoteCurrency={quoteCurrency}
            conversion={conversionRate}
            date={lastConvertedDate}
          />
          <View style={styles.clearButton}>
            <ClearButton
              text="Reverse Currencies"
              onPress={swapCurrency}
            />
          </View>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency, amount, conversions } = state.currencies
  const conversionSelector = conversions[baseCurrency] || {}
  const rates = conversionSelector.rates || {}
  const conversionRate = rates[quoteCurrency] || 0
  const isFetching = conversionSelector.isFetching
  const lastConvertedDate = conversionRate.date

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate,
    isFetching,
    lastConvertedDate,
    primaryColor: state.themes.color,
  }
}

const mapDispatchToProps = dispatch => ({
  changeCurrencyAmount: amount => {
    dispatch(currencyActions.changeCurrencyAmount(amount))
  },
  swapCurrency: () => {
    dispatch(currencyActions.swapCurrency())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
