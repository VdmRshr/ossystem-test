import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ErrorBoundary from "./components/ErrorBoundary";
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App/>
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

