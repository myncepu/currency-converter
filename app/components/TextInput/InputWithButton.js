import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native'
import color from 'color'

import styles from './styles'

class InputWithButton extends Component {
  static propTypes = {
    buttonText: PropTypes.string.isRequired,
    editable: PropTypes.bool,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    editable: true,
  }

  render() {
    const {buttonText, editable, onPress} = this.props
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier)

    const inputStyle = [
      styles.input,
      editable ? null : styles.disabled,
      this.props.textColor ? { color: this.props.textColor } : null
    ]

    const textStyle = [
      styles.text,
      this.props.textColor ? { color: this.props.textColor } : null
    ]

    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor={underlayColor}
          style={styles.button}
          onPress={onPress}
        >
          <Text style={textStyle}>
            {buttonText}
          </Text>
        </TouchableHighlight>
        <TextInput
          style={inputStyle}
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          {...this.props}
        />
      </View>
    )
  }
}

export default InputWithButton
