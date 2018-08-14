import {StyleSheet} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const borderRadius = '0.2rem'

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
    height: '2.8rem',
    borderRadius,
  },
  button: {
    flex: 1.3,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  input: {
    flex: 5,
    paddingHorizontal: '0.5rem',
    borderLeftColor: '$border',
    borderLeftWidth: StyleSheet.hairlineWidth,
    height: '100%',
    fontSize: '1.1rem',
    color: '$primaryColor',
    backgroundColor: '$white',
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  disabled: {
    backgroundColor: '$lightGray',
  },
  text: {
    color: '$primaryColor',
    fontSize: '1.1rem',
  }
})

export default styles
