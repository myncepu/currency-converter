import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, KeyboardAvoidingView, TouchableOpacity, View, StatusBar } from 'react-native'
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
  lastConverted: {
    paddingVertical: '0.4rem',
  }
})

class HomeScreen extends React.Component {
  static propTypes = {
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversions: PropTypes.object,
    swapCurrency: PropTypes.func,
    changeCurrencyAmount: PropTypes.func,
    primaryColor: PropTypes.string,
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
      conversions,
      changeCurrencyAmount,
      swapCurrency,
      primaryColor,
    } = this.props

    const conversion = conversions[baseCurrency].rates[quoteCurrency]
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
              currentCurrency: baseCurrency,
              title: 'Base currency',
            })}
            onChangeText={changeCurrencyAmount}
            textColor={primaryColor}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            value={
              conversions[baseCurrency].isFetching ? '...' : String(amount*conversion)
            }
            editable={false}
            onPress={() => this.props.navigation.navigate('CurrencyList', {
              currentCurrency: quoteCurrency,
              title: 'Quote currency',
            })}
            textColor={primaryColor}
          />
          <LastConverted
            baseCurrency={baseCurrency}
            quoteCurrency={quoteCurrency}
            conversion={conversion}
            date={conversions[baseCurrency].date}
          />
          <View style={styles.lastConverted}>
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

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  amount: state.currencies.amount,
  conversions: state.currencies.conversions,
  primaryColor: state.themes.color,
})

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
