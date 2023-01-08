
import constructors from './functionts/functionts';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { createStore, Store } from 'redux';
import presentationReducers from './redusers/presentationReducers';
import { AppType } from './types/types';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

export const slideWidth = 1000;
export const slideHeight = 700;

export let store: Store<AppType>;

const settings = constructors.createSettings();
export const Context = React.createContext(settings);

export function init(state: AppType | undefined = undefined) {
    store = createStore(presentationReducers);
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <Context.Provider value={settings}>
                    <App />
                </Context.Provider>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.register();
