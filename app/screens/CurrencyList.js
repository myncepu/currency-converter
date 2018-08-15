import React, { Component} from 'react'
import {Button, FlatList, View} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import currencies from '../data/currencies'
import {ListItem, Separator} from '../components/List'
import * as currencyActions from '../actions/currencies'
import {initialState} from '../reducers/themes'

class CurrencyList extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title', '')
    const {state} = navigation

    return {
      title: title,
      headerStyle: {
        backgroundColor: state.params && state.params.primaryColor
          ? state.params.primaryColor
          : initialState.color
      },
      headerLeft: null,
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Home')}
          title="close"
          color="#fff"
        />
      ),
    }
  }

  handlePress = (currency) => {
    const currencyType = this.props.navigation.getParam('type', '')
    if (currencyType === 'base') {
      this.props.changeBaseCurrency(currency)
    } else if (currencyType === 'quote') {
      this.props.changeQuoteCurrency(currency)
    }

    this.props.navigation.navigate('Home', {
      title: 'Base currency',
      currentCurrency: currency,
    })
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
    const currencyType = this.props.navigation.getParam('type', '')
    let currentCurrency
    if (currencyType === 'base') {
      currentCurrency = this.props.baseCurrency
    } else if (currencyType === 'quote') {
      currentCurrency = this.props.quoteCurrency
    }
    return (
      <View>
        <FlatList
          ItemSeparatorComponent={() => (<Separator />)}
          keyExtractor={(item) => item}
          data={currencies}
          renderItem={({item, separators}) => (
            <ListItem
              text={item}
              separators={separators}
              selected={item === currentCurrency}
              onPress={this.handlePress}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              iconBackground={this.props.primaryColor}
            />
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,

  primaryColor: state.themes.color,
})

const mapDispatchToProps = dispatch => ({
  changeBaseCurrency: currency => {
    dispatch(currencyActions.changeBaseCurrency(currency))
  },
  changeQuoteCurrency: currency => {
    dispatch(currencyActions.changeQuoteCurrency(currency))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyList)
