import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

//Durante a criação da store, é aplicado um middleware que irá aguardar a resolução da promise
const store = applyMiddleware(thunk, promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app')
)
