import {StyleSheet} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  // local variables for this stylesheet
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    marginVertical: '0.5rem',
    flexDirection: 'row',
    backgroundColor: '$white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '2rem',
    borderRadius: '0.2rem',
  },
  button: {
    flex: 1.3,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '0.2rem',
    borderBottomLeftRadius: '0.2rem',
  },
  input: {
    flex: 5,
    paddingHorizontal: '0.5rem',
    borderLeftColor: '$primaryBlue',
    borderLeftWidth: StyleSheet.hairlineWidth,
    height: '100%',
    fontSize: '1.1rem',
    color: '$border',
  },
  disabled: {
    backgroundColor: '$lightGray',
  },
  text: {
    color: '$primaryBlue',
    fontSize: '1.1rem',
  }
})

export default styles
