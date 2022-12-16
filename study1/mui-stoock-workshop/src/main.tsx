import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { createStore, applyMiddleware, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider, useDispatch } from 'react-redux'
import reducers from './reducers'
import logger from 'redux-logger'


let middlewares: Middleware[] = [thunk]

if (true || process.env.REACT_APP_IS_PRODUCTION != '1') {
  middlewares.push(logger)
}

export const store = createStore(reducers, applyMiddleware(...middlewares))
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
