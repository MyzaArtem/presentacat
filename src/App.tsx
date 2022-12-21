import React from 'react';
import styles from './App.module.css';
import SlideMiniature from './slideCarousel/slideMiniature';
import SlideViewport from './slideViewPort/slideViewport';
import { Slide } from './types';


function App() {
  const slideData: Slide = {
    id: 0,
    elementList: [
      {
        type: 'figure',
        figure: 'circle',
        x: 0,
        y: 0,
        strokeColor: 'purple',
        background: null,
        strokeWidth: 1,
        borderRadius: 0,
        width: 100,
        height: 100
      },
      {
        type: 'figure',
        figure: 'rectangle',
        x: 200,
        y: 200,
        strokeColor: 'black',
        background: null,
        strokeWidth: 1,
        borderRadius: 0,
        width: 200,
        height: 100
      },
      {
        type: 'figure',
        figure: 'triangle',
        x: 400,
        y: 400,
        strokeColor: 'yellow',
        background: null,
        strokeWidth: 1,
        borderRadius: 0,
        width: 200,
        height: 200
      },
      {
        type: 'img',
        x: 300,
        y: 300,
        path: 'data:image/jpeg;base64,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',
        width: 100,
        height: 100
      },
      {
        type: 'text',
        x: 500,
        y: 600,
        data: 'lorem lorem 123',
        fontFamily: 'Arial',
        fontColor: 'magenta',
        fontSize: 35,
        fontWeight: 300,
        underline: false,
        width: 200,
        height: 200,
        id: 1
      }
    ],
    selectedBlocks: [
      {
        type: ''
      }
    ],
    background: {
      codeColor: '#FFFFFF'
    }
    // blockList: [

    // ],
    // selectedBlockList: [

    // ];
  }
  return (
    <div className={styles.app}>
      <div className={styles.workingArea}>
        <SlideMiniature slides={slideData}/>
        <SlideViewport slides={slideData}/>
      </div>
    </div>
  );
}

export default App;
