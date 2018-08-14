import * as currencyActions from '../actions/currencies'

const initialState = {
  'baseCurrency': 'USD',
  'quoteCurrency': 'CNY',
  'amount': 100,
  'conversions': {
    'USD': {
      'isFetching': false,
      'base': 'USD',
      'date': '2017-05-31',
      'rates': {
        'CNY': 6.813,
        'GBP': 0.77858,
        'USD': 1,
      }
    },
    'CNY': {
      'isFetching': false,
      'base': 'CNY',
      'date': '2017-05-31',
      'rates': {
        'USD': 0.146778218,
        'GBP': 1.28438953,
        'CNY': 1,
      }
    },
    'GBP': {
      'isFetching': false,
      'base': 'CNY',
      'date': '2017-05-31',
      'rates': {
        'USD': 0.146778218,
        'GBP': 1,
        'CNY': 1,
      }
    },
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
        baseCurrency: action.baseCurrency,
      }
    case currencyActions.CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.quoteCurrency,
      }
    default:
      return state
  }
}

export default currencyReducer
