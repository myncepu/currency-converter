import * as themeActions from '../actions/themes'

export const initialState = {
  color: '#00BD9D',
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeActions.CHANGE_THEME:
      return {
        ...state,
        color: action.color,
      }
    default:
      return state
  }
}

export default themeReducer
