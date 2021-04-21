import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/store.config'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, thunk, multi)(createStore)(
  reducers,
  devTools
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
