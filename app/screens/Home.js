import React from 'react'
import {Text, StatusBar} from 'react-native'

import {Container} from '../components/Container'
import {Logo} from '../components/Logo'

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar
          translucent={false}
          barStyle="light-content"
        />
        <Logo />
      </Container>
    )
  }
}

export default HomeScreen
