import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  ScrollView,
  Linking,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'
import { connectAlert } from '../components/Alert'

import {ListItem, Separator} from '../components/List'
import {initialState} from '../reducers/themes'

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

  static navigationOptions = ({ navigation }) => {
    // console.log('navigation', navigation)
    const {state} = navigation
    return {
      title: 'Setting',
      headerStyle: {
        backgroundColor: state.params && state.params.primaryColor ? state.params.primaryColor : initialState.color
      },
    }
  }

  constructor(props) {
    super(props)
  }

  handleSitePress = () => {
    Linking.openURL('https://www.fixer.io').catch(() => {
      this.props.alertWithType('error', 'Sorry!', 'Fixer.io can\'t be opened right now.')
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

const mapStateToProps = state => ({
  primaryColor: state.themes.color,
})

export default connect(
  mapStateToProps,
)(connectAlert(Options))
