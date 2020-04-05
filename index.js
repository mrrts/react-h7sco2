import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

const DEFAULT_COUNT = 0;

const outerState = {
  countA: 0,
  countB: 100
};

const App = () => {
  const [showSubCounts, setShowSubCounts] = useState(false);
  const [count, setCount] = useState(DEFAULT_COUNT);
  const isEven = count % 2 === 0;

  return (
    <>
      <h1>Counter {count}</h1>
      {isEven
        ? <p>It's EVEN!!!!!</p> 
        : <p><strong>It's ODD!!!!!!</strong></p>}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>
        <button onClick={() => setShowSubCounts(!showSubCounts)}>
          {showSubCounts ? 'Hide' : 'Show'} SubCounts
        </button>
      </div>
      { showSubCounts && <SubCounts /> }
    </>
  );
}


const SubCounts = props => {
  const [countA, setCountA] = useState(outerState.countA);
  const [countB, setCountB] = useState(outerState.countB);

  useEffect(() => {
    outerState.countA = countA;
    outerState.countB = countB;
  }, [countA, countB]);

  return (
    <div>
      <p>
        SubCount A is: {countA} <br />
        <button onClick={() => setCountA(countA + 1)}>INCREMENT SUBCOUNT A</button>
      </p>
      <p>
        SubCount B is: {countB} <br />
        <button onClick={() => setCountB(countB + 1)}>INCREMENT SUBCOUNT B</button>
      </p>
    </div>
  );
}

render(
  <App />,
  document.getElementById('root')
);
