import React from 'react';
import { render } from 'react-dom';
import UserApp from "./app";
import { Provider } from "react-redux";
import { store } from './setup/store';

render (
    <Provider store={store}>
        <UserApp />
    </Provider>,
    document.getElementById('main')
);