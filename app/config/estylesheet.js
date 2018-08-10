import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

let {width} = Dimensions.get('window')
// always call EStyleSheet.build() even if you don't use global variables!
export default () => {
  EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#fff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#D9D9D9',

    $rem: width > 340 ? 18 : 16,

    // $outline: 1, // outline all components that are using EStyleSheet
  })
}
