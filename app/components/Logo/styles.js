import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

const imageWidth = Dimensions.get('window').width / 2

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  container: {
    alignItems: 'center',
  },
  logoBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
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
  },
  logoText: {
    marginVertical: '1rem',
    fontSize: '1.5rem',
    color: '$white',
    fontWeight: '500',
  }
})
