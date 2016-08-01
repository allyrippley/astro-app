

import { GET_EVENTS } from '../constants/actionTypes'
// import calculator from '../businessLogic/fuelSavingsCalculator'
// import dateHelper from '../businessLogic/dateHelper'
import initialState from './initialState'
import eventsData from '../data/astroEvents'
import objectAssign from 'object-assign';

// // IMPORTANT: Note that with Redux, state should NEVER be changed.
// // State is considered immutable. Instead,
// // create a copy of the state passed and set new values on the copy.
// // Note that I'm using Object.assign to create a copy of current state
// // and update values on the copy.
export default function astroEventsReducer(state = initialState, action) {
//   let newState
//
  window.console.log(eventsData)
   switch (action.type) {
     case GET_EVENTS:
      return objectAssign({}, state, {events: eventsData || null})
//     case SAVE_FUEL_SAVINGS:
//       // For this example, just simulating a save by changing date modified.
//       // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
//       return objectAssign({}, state, {dateModified: dateHelper.getFormattedDateTime(new Date())})
//
//     case CALCULATE_FUEL_SAVINGS:
//       newState = objectAssign({}, state)
//       newState[action.fieldName] = action.value
//       newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState)
//       newState.dateModified = dateHelper.getFormattedDateTime(new Date())
//
//       if (newState.necessaryDataIsProvidedToCalculateSavings) {
//         newState.savings = calculator().calculateSavings(newState)
//       }
//
//       return newState
//
  }
  return state
}
