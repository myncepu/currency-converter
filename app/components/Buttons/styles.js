import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '1rem',
    height: '1rem',
    marginHorizontal: '1rem',
  },
  text: {
    fontSize: '1rem',
    color: '$white',
  }
})
