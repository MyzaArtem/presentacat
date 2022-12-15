import React from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './slideObjects/circle';
import Rectangle from './slideObjects/rectangle';
import Triangle from './slideObjects/triangle';

function App() {
  return (
    <div>
      <Circle kWidth={10} kHeight={10} borderColor="black"></Circle>
      <Rectangle rWidth={10} rHeight={10} borderColor="black"></Rectangle>
      <Triangle tWidth={10} tHeight={10} points={`${'10'}; ${'10'}; ${'10'};`} ></Triangle>
    </div>
  );
}

export default App;
