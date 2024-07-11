import React, { useRef, useState } from 'react';
import './App.css';
import xIcon from './assets/X.png';
import oIcon from './assets/O.png';
let tracker = ['', '', '', '', '', '', '', '', ''];

export default function App() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const Ref0 = useRef(null);
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);
  const Ref5 = useRef(null);
  const Ref6 = useRef(null);
  const Ref7 = useRef(null);
  const Ref8 = useRef(null);
  

  function toggleCell(e, ind) {
    const tar = e.target;
    if (lock || tracker[ind] === 'x' || tracker[ind] === 'o') {
      return 0;
    }
    else if (count % 2 === 0) {
      tar.innerHTML = `<img src = ${xIcon} alt="Xicon"/>`;
      tracker[ind] = 'x';
      setCount(count + 1);
    }
    else {
      tar.innerHTML = `<img src = ${oIcon} alt="Oicon"/>`;
      tracker[ind] = 'o';
      setCount(count + 1);
    }
    checkWin();
  }

  function checkWin() {
    const pos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < pos.length; i++) {
      const [a, b, c] = pos[i];
      if (tracker[a] === tracker[b] && tracker[b] === tracker[c] && tracker[c] !== "") {
        winner(tracker[c]);
        return;
      }
    }

    if(count == 8){

      titleRef.current.innerHTML = "It's a Draw!"
      console.log("draw");
    }
  }

  function winner(player) {
    setLock(true);
    if(player === 'x'){
      titleRef.current.innerHTML = `Congratulation to our winner <img src = ${xIcon} alt="Xicon"/>`
    }
    else{
      titleRef.current.innerHTML = `Congratulation to our winner <img src = ${oIcon} alt="Oicon"/>`
    }
  }

  function onReset() {
    tracker = ['', '', '', '', '', '', '', '', ''];
    setLock(false);
    setCount(0);
    titleRef.current.innerHTML = "Welcome to <span>Tic-Tac-Toe!</span>";
    Ref0.current.innerHTML = null;
    Ref1.current.innerHTML = null;
    Ref2.current.innerHTML = null;
    Ref3.current.innerHTML = null;
    Ref4.current.innerHTML = null;
    Ref5.current.innerHTML = null;
    Ref6.current.innerHTML = null;
    Ref7.current.innerHTML = null;
    Ref8.current.innerHTML = null;
  }

  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Welcome to <span>Tic-Tac-Toe!</span></h1>
      <div className='board'>
        <div className='row'>
          <div className='col' ref = {Ref0} onClick={(e) => toggleCell(e, 0)}></div>
          <div className='col' ref = {Ref1} onClick={(e) => toggleCell(e, 1)}></div>
          <div className='col' ref = {Ref2} onClick={(e) => toggleCell(e, 2)}></div>
        </div>
        <div className='row'>
          <div className='col' ref = {Ref3} onClick={(e) => toggleCell(e, 3)}></div>
          <div className='col' ref = {Ref4} onClick={(e) => toggleCell(e, 4)}></div>
          <div className='col' ref = {Ref5} onClick={(e) => toggleCell(e, 5)}></div>
        </div>
        <div className='row'>
          <div className='col' ref = {Ref6} onClick={(e) => toggleCell(e, 6)}></div>
          <div className='col' ref = {Ref7} onClick={(e) => toggleCell(e, 7)}></div>
          <div className='col' ref = {Ref8} onClick={(e) => toggleCell(e, 8)}></div>
        </div>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )
}