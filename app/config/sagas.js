import {takeEvery, put, select, call} from 'redux-saga/effects'
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies'

const getLatestRate = currency =>
  fetch(`https://frankfurter.app/current?from=${currency}`)

function* fetchLatestConversionRate(action) {
  try {
    let currency = action.currency
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency)
    }
    const response = yield call(getLatestRate, currency)
    const result = yield response.json()
    console.log('result', result)
    yield put({ type: CONVERSION_RESULT, result })
  } catch(e) {
    yield put({ type: CONVERSION_ERROR, error: e.message })
  }
}

export default function* rootSaga() {
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRate)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRate)
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRate)
}
