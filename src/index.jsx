import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './main/routes'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()

//Durante a criação da store, é aplicado um middleware que irá aguardar a resolução da promise
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

//Quem carrega app agora é Routes
ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>
    , document.getElementById('app')
)
