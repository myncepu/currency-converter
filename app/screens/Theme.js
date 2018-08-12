import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import {ListItem, Separator} from '../components/List'

const styles = EStyleSheet.create({
  $iconSize: '1.5rem',
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',

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
    title: 'Theme',
  }

  constructor(props) {
    super(props)
    this.state = {
      primaryColor: styles.$blue,
    }
  }

  handlePress = (color) => {
    this.setState({
      primaryColor: color
    })
    this.props.navigation.goBack()
  }
  render() {
    const {primaryColor} = this.state
    return (
      <ScrollView>
        <ListItem
          text="Blue"
          onPress={() => this.handlePress(styles.$blue)}
          selected={true}
          checkmark={primaryColor === styles.$blue}
          iconColor={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePress(styles.$orange)}
          selected={true}
          checkmark={primaryColor === styles.$orange}
          iconColor={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePress(styles.$green)}
          selected={true}
          checkmark={primaryColor === styles.$green}
          iconColor={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePress(styles.$purple)}
          selected={true}
          checkmark={primaryColor === styles.$purple}
          iconColor={styles.$purple}
        />
        <Separator />
      </ScrollView>
    )
  }
}

export default Options
