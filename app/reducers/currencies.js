import * as currencyActions from '../actions/currencies'
import {
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies'

const initialState = {
  'baseCurrency': 'CNY',
  'quoteCurrency': 'USD',
  'amount': 100,
  'conversions': {},
  'error': null,
}

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  }

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency]
  }

  return {
    ...state.conversions,
    [action.currency]: conversion,
  }
}

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case currencyActions.SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      }
    case currencyActions.CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount
      }
    case currencyActions.CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
      }
    case currencyActions.CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action),
      }
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state, { currency: state.baseCurrency })
      }
    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          }
        }
      }
    case CONVERSION_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default currencyReducer
