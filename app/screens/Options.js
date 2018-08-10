import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import EStyleSheet from 'react-native-extended-stylesheet'

import {ListItem, Separator} from '../components/List'

const styles = EStyleSheet.create({
  $iconSize: '1.5rem',

  iconContainer: {
    width: '2rem',
    height: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Options extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static navigationOptions =  {
    title: 'Setting',
  }

  constructor(props) {
    super(props)
  }

  handlePress = () => null
  render() {
    return (
      <ScrollView>
        <ListItem
          text="Themes"
          onPress={this.handlePress}
          customIcon={
            <View style={styles.iconContainer}>
              <Icon
                name="ios-arrow-forward"
                size={styles.$iconSize}
              />
            </View>
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePress}
          customIcon={
            <View style={styles.iconContainer}>
              <Icon
                name="ios-link"
                size={styles.$iconSize}
              />
            </View>
          }
        />
        <Separator />
      </ScrollView>
    )
  }
}

export default Options
