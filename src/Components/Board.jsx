import React, { useState } from 'react';

const Board = () => {
  const [number, setNumber] = useState(0);
  const [numberSet, setNumberSet] = useState(0);
  const [lastButton, setLastButton] = useState('');
  const [display, setDisplay] = useState('num');
  const createNumber = num => {
    if (!isNaN(num)) {
      setNumber(parseInt(number.toString() + num.toString()));
      setDisplay('num');
      console.log(number);
    }
    if (num === 'C') {
      setNumber(0);
      setDisplay('num');
      setLastButton('');
      setNumberSet(0);
    }
    if (
      num === '+' ||
      num === '-' ||
      num === 'X' ||
      num === '/' ||
      num === '='
    ) {
      if (lastButton === '+' || lastButton === '') {
        setNumberSet(prev => prev + number);
      } else if (lastButton === '-') {
        setNumberSet(prev => prev - number);
      } else if (lastButton === 'X') {
        setNumberSet(prev => prev * number);
      } else if (lastButton === '/') {
        setNumberSet(prev => prev / number);
      }
      //   else if (lastButton === '=') {
      //     setNumberSet(number);
      //   }
      setNumber(0);
      setDisplay('tot');
      setLastButton(num);
    }
    // if (num === '=') {
    //   if (lastButton === '+') {
    //     setNumberSet(prev => prev + number);
    //     setLastButton('=');
    //     setNumber(0);
    //     setDisplay('tot');
    //   }
    // }
  };
  const calKey = num => {
    return (
      <button type="button" onClick={() => createNumber(num)}>
        {num}
      </button>
    );
  };
  return (
    <div className="board">
      <div className="display-box">
        {display === 'num' ? number : numberSet}
      </div>
      <div className="board-row">
        {calKey(7)}
        {calKey(8)}
        {calKey(9)}
        {calKey('-')}
      </div>
      <div className="board-row">
        {calKey(4)}
        {calKey(5)}
        {calKey(6)}
        {calKey('+')}
      </div>
      <div className="board-row">
        {calKey(1)}
        {calKey(2)}
        {calKey(3)}
        {calKey('=')}
      </div>
      <div className="board-row">
        {calKey(0)}
        {calKey('C')}
        {calKey('X')}
        {calKey('/')}
      </div>
    </div>
  );
};

export default Board;
