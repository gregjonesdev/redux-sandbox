import { createStore, applyMiddleware } from 'redux'
import { State, reducer, initialState } from '../redux/reducers'

const store = createStore<State>(reducer, initialState)

export default store
