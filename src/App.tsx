import React from 'react';
import styles from './App.module.css';
import SlideViewport from './slideViewPort/slideViewport';
import TopBar from './topBar/topBar';
// import Pallete from './pallete/pallete';
import { createStore, Store } from 'redux';
import presentationReducers from './redusers/presentationReducers';
import { AppType } from './types/types';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import constructors from '../src/functionts/functionts';
import useHotKeys from '../src/functionts/hotKeyMethods';
import { connect } from 'react-redux';
import {
    deleteSlideObject,
    deleteSlide,
    redo,
    undo
} from './actions/actionsCreators';
import CreateMenuFigures from './topBar/components/createMenuFigures'
import SlideCarousel from './slideCarousel/slideCarousel';
import { store } from './index';


//init values
export const paletteSampleColors = [
  '#F5F5F5',
  '#F3E98C',
  '#FEDB03',
  '#EF8517',
  '#DC1417',
  '#64ACD0',
  '#8122E0',
  '#86BA34',
  '#4AAF8F',
  '#832812',
  '#FAC86E',
  '#595D69',
  '#EF71A7',
  '#184181',
  '#000000'
];

export const fonts = [
  'Rubik Bubbles',
  'Lato',
  'Quicksand',
  'Anton',
  'Bebas Neue',
  'Crimson Text',
  'Righteous',
  'Fredoka One',
  'Chakra Petch',
  'Kalam'
].sort();
WebFont.load({
    google: {
        families: fonts,
    },
});


export const slideWidth = 1000;
export const slideHeight = 650;

interface AppProps {
  name: string;
  redo: () => void;
  undo: () => void;
}

function App(props: AppProps) {


  useHotKeys(
    props.redo,
    props.undo
);

  React.useEffect(() => {
      document.title = props.name;
  });
  console.log(store.getState())
  return (
        <div className={styles.app}>
          <div className={styles.workingArea}>
            <div className={styles.topBarArea}>
              <TopBar/>
              <CreateMenuFigures />
            </div>
            <div className={styles.slideViewPortArea}>
              <SlideCarousel />
              <SlideViewport />
            </div>
          </div>
        </div>
  );
}

const mapDispatchToProps = {
  deleteSlideObject,
  deleteSlide,
  redo,
  undo
};

interface AppOwnProps {
  name: string;
}

const mapStateToProps = (state: AppType): AppOwnProps => {
  return {
      name: state.name,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
