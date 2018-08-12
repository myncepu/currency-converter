import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView,
  Linking,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connectAlert } from '../components/Alert'

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
    alertWithType: PropTypes.func,
  }

  static navigationOptions =  {
    title: 'Setting',
  }

  constructor(props) {
    super(props)
  }

  handleSitePress = () => {
    Linking.openURL('tps://www.fixer.io').catch(() => {
      this.props.alertWithType('error', 'Sorry!', 'Fixer.io can\'t be opened right now.')
    })
  }
  render() {
    return (
      <ScrollView>
        <ListItem
          text="Themes"
          onPress={() => this.props.navigation.navigate('Theme')}
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
          onPress={this.handleSitePress}
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

export default connectAlert(Options)
