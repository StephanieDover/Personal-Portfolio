import thunk from './redux-thunk.js'
import reporter from './redux-reporter.js'
import { persistStore, autoRehydrate } from 'redux-persist'
import { compose, createStore, applyMiddleware } from 'redux'

export default () =>
  createStore(compose(applyMiddleware(thunk, reporter), autoRehydrate()))
