import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'

import styles from './styles'

class ClearButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <Image
            source={require('./images/icon.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ClearButton
