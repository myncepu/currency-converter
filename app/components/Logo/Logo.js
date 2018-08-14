import React, { Component} from 'react'
import {
  Platform,
  Keyboard,
  ImageBackground,
  View,
  Animated,
} from 'react-native'

import styles from './styles'

const ANIMATION_DURATION = 250

class Logo extends Component {
  constructor(props) {
    super(props)

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize)
    this.imageWidth = new Animated.Value(styles.$largeImageSize)
    this.logoFontSize = new Animated.Value(styles.$largeFontSize)
    this.padding = new Animated.Value(styles.$largePadding)
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow'
    let hideListener = 'keyboardWillHide'
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow'
      hideListener = 'keyboardDidHide'
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide)
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.logoFontSize, {
        toValue: styles.$smallFontSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.padding, {
        toValue: styles.$smallPadding,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.logoFontSize, {
        toValue: styles.$largeFontSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.padding, {
        toValue: styles.$largePadding,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  render() {
    const containerImageStyle = [
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ]

    const imageStyle = [
      styles.logo,
      { width: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ]

    const logoTextStyle = [
      styles.logoText,
      { fontSize: this.logoFontSize, paddingVertical: this.padding }
    ]

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <ImageBackground
            source={require('./images/background.png')}
            style={styles.backgroundImage}
            resizeMode="contain"
          >
            <Animated.Image
              source={require('./images/logo.png')}
              style={imageStyle}
              resizeMode="contain"
            />
          </ImageBackground>
        </Animated.View>
        <Animated.Text style={logoTextStyle}>
          Currency Converter
        </Animated.Text>
      </View>
    )
  }
}

export default Logo
