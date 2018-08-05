import React from 'react'
import PropTypes from 'prop-types'
import {SafeAreaView} from 'react-navigation'

import styles from './styles'

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.children}
      </SafeAreaView>
    )
  }
}

export default Container
