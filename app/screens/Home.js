import React from 'react'
import {View, StatusBar} from 'react-native'

import {Container} from '../components/Container'

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar
          barStyle="light-content"
        />
        <View />
      </Container>
    )
  }
}

export default HomeScreen
