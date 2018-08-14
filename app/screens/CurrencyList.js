import React, { Component} from 'react'
import {Button, FlatList, View} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import currencies from '../data/currencies'
import {ListItem, Separator} from '../components/List'
import * as currencyActions from '../actions/currencies'
import {initialState} from '../reducers/themes'

let TEMP_CURRENT_CURRENCY = 'CNY'
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
        backgroundColor: state.params && state.params.primaryColor ? state.params.primaryColor : initialState.color
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

  constructor(props) {
    super(props)

    this.state = {
      currentCurrency: this.props.navigation.getParam('currentCurrency', TEMP_CURRENT_CURRENCY),
    }
  }

  handlePress = (currency) => {
    this.setState({
      currentCurrency: currency,
    })

    const title = this.props.navigation.getParam('title', '')
    console.log('title', title)
    console.log('currency', currency)

    if (title === 'Base currency') {
      this.props.changeBaseCurrency(currency)
    } else if (title === 'Quote currency') {
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
              selected={item === this.state.currentCurrency}
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
