import { combineReducers } from 'redux'
import fuelSavings from './fuelSavingsReducer'
import astroEvents from './astroEventsReducer'

const rootReducer = combineReducers({
  fuelSavings,
  astroEvents
})

export default rootReducer
