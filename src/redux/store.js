import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from "redux-logger"
import thunk from "redux-thunk"
import { reducer } from './reducer'

const store = createStore(
    combineReducers({
        counter: reducer
    }),
    applyMiddleware(thunk,logger),
)

export default store