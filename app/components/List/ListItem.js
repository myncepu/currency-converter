import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native'

import styles from './styles'
import Icon from './Icon'

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.string,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visiable: PropTypes.bool,
  }

  static defaultProps = {
    checkmark: true,
    visiable: true,
  }

  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      text,
      selected,
      checkmark,
      onShowUnderlay,
      onHideUnderlay,
      visiable,
      onPress,
    } = this.props

    return (
      <TouchableHighlight
        underlayColor={styles.$underlayColor}
        onPress={() => onPress(text)}
        onShowUnderlay={onShowUnderlay}
        onHideUnderlay={onHideUnderlay}>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>
            {text}
          </Text>
          { selected && <Icon visiable={visiable} checkmark={checkmark} /> }
        </View>
      </TouchableHighlight>
    )
  }
}

export default ListItem
