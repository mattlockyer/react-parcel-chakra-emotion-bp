import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import reducers from './redux/reducers'
import customTheme from './theme/theme'

const store = createStore(reducers, applyMiddleware(thunk))

import App from './App'

render(
    <Provider store={store}>
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
