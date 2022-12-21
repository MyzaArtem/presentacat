// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { createStore, Store } from 'redux';
import { AppType } from './types'
import { Provider } from 'react-redux';

export const defaultFigureImgSize = 200;
export const defaultFigureStrokeWidth = 2;

export const defaultTextBlockWidth = 300;
export const defaultTextBlockHeight = 50;
export const defaultFontSize = 35;
export const defaultFontFamily = 'Oswald';
export const defaultTextWeight = 400;
export const defaultTextData = 'Введите текст';

export const slideWidth = 1000;
export const slideHeight = 700;

export const objectsInitialX = 30;
export const objectsInitialY = 30;

export let store: Store<AppType>;

const settings = constructors.createSettings();
export const Context = React.createContext(settings);

export function init(state: AppType | undefined = undefined) {
    if (state) {
        store = createStore(presentationReducers, state);
        window.localStorage.setItem('app', JSON.stringify(state));
    } else {
        let savedApp = window.localStorage.getItem('app');
        if (savedApp) store = createStore(presentationReducers, JSON.parse(savedApp));
        else store = createStore(presentationReducers);
    }
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

