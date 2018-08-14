import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

const imageWidth = Dimensions.get('window').width / 2

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  $largeFontSize: '1.5rem',
  $smallFontSize: '1rem',

  $largePadding: '1rem',
  $smallPadding: '0.3rem',

  container: {
    alignItems: 'center',
  },
  backgroundImage: {          // <- new
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'stretch',
    flex: 1,
  },
  logo: {
    width: '$largeImageSize',
    height: '$largeImageSize',
    tintColor: '$primaryColor',
  },
  logoText: {
    paddingVertical: '1rem',
    fontSize: '1.5rem',
    color: '$white',
    fontWeight: '500',
  }
})
