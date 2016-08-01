// Set up your root reducer here...
 import { combineReducers } from 'redux'

 import astroEvents from './astroEventsReducer'

 const rootReducer = combineReducers({
   astroEvents
 })

 export default rootReducer
