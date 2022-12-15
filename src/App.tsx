import React from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './slideObjects/circle';

function App() {
  return (
    <div>
      <Circle kWidth={10} kHeight={10} borderColor="black"></Circle>
    </div>
  );
}

export default App;
