// import React from 'react'

// export const store = () => {
//     return (
//         <div>
//             <h1>helo stpore page</h1>
//         </div>
//     )
// }

import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { alertsReducer } from './reducers/alertsReducer';
import { carsReducer } from './reducers/carsReducer';
import { bookingsReducer } from './reducers/bookingsReducer';
const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
   carsReducer,
   alertsReducer,
   bookingsReducer,
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store