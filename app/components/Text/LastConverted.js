import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text} from 'react-native'
import moment from 'moment'

import styles from './styles'

class LastConverted extends Component {
  static propTypes = {
    baseCurrency: PropTypes.string.isRequired,
    conversion: PropTypes.number.isRequired,
    quoteCurrency: PropTypes.string.isRequired,
    date: PropTypes.string,
  }

  render() {
    const {baseCurrency, conversion, quoteCurrency, date} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.small}>
          {`1 ${baseCurrency} = ${conversion} ${quoteCurrency} as of ${moment(date).format('MMMM D, YYYY')}`}
        </Text>
      </View>
    )
  }
}

export default LastConverted
