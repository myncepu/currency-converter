import React, { Component} from 'react'
import {Button, FlatList, View} from 'react-native'
import PropTypes from 'prop-types'

import currencies from '../data/currencies'
import {ListItem, Separator} from '../components/List'

let TEMP_CURRENT_CURRENCY = 'CNY'
class CurrencyList extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title', '')

    return {
      title: title,
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

  handlePress = (text) => {
    this.setState({
      currentCurrency: text,
    })
    this.props.navigation.navigate('Home', {
      title: 'Base currency',
      currentCurrency: text,
    })
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
            />
          )}
        />
      </View>
    )
  }
}

export default CurrencyList
