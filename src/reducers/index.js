import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './userReducer.js'
import fileReducer from './fileReducer.js'
import uploadReducer from './uploadReducer.jsx'


const rootReducers = combineReducers({
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))