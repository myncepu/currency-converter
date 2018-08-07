import EStyleSheet from 'react-native-extended-stylesheet'
import {Image, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logoBackground: {
    width: 0.5 * width,
    height: 0.5 * width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '50%',
    height: '50%',
    resizeMode: Image.resizeMode.contain,
  },
  logoText: {
    marginVertical: '1rem',
    fontSize: '1.5rem',
    color: '$white',
    fontWeight: '500',
  }
})
