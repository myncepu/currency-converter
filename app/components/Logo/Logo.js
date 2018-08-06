import React, { Component} from 'react'
import {
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native'

import styles from './styles'

class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./images/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        >
          <Image
            source={require('./images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </ImageBackground>
        <Text style={styles.logoText}>
          Currency Converter
        </Text>
      </View>
    )
  }
}

export default Logo
