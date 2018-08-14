import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'

import {ListItem, Separator} from '../components/List'
import * as themeActions from '../actions/themes'
import {initialState} from '../reducers/themes'

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
    primaryColor: PropTypes.string,
    changeTheme: PropTypes.func,
  }

  static navigationOptions = ({ navigation }) => {
    // console.log('navigation', navigation)
    const {state} = navigation
    return {
      title: 'Theme',
      headerStyle: {
        backgroundColor: state.params && state.params.primaryColor ? state.params.primaryColor : initialState.color
      },
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      primaryColor: styles.$blue,
    }
  }

  handlePress = (color) => {
    this.props.changeTheme(color)
    this.props.navigation.goBack()
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
    const {primaryColor} = this.props
    return (
      <ScrollView>
        <ListItem
          text="Blue"
          onPress={() => this.handlePress(styles.$blue)}
          selected={true}
          checkmark={primaryColor === styles.$blue}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePress(styles.$orange)}
          selected={true}
          checkmark={primaryColor === styles.$orange}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePress(styles.$green)}
          selected={true}
          checkmark={primaryColor === styles.$green}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePress(styles.$purple)}
          selected={true}
          checkmark={primaryColor === styles.$purple}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  primaryColor: state.themes.color,
})

const mapDispatchToProps = dispatch => ({
  changeTheme: color => dispatch(themeActions.changeTheme(color))
})

export default connect(mapStateToProps, mapDispatchToProps)(Options)
