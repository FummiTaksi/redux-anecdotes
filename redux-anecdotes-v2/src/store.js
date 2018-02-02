import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import freezeState from 'redux-freeze-state';

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
  })
  
const store = createStore(
  freezeState(reducer),
  applyMiddleware(thunk)
)

export default store

