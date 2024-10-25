import React, { useContext, useEffect, useState } from "react";
import HeaderText from "./HeaderText";
import BorderText from "./BorderText";
import { NavLink } from "react-router-dom";
import { CounterContext } from "./CounterProvider";


export default function App() {

  const [countState, setCountState] = useContext(CounterContext);

  // let [countState, setCountState] = useState(0);
  let [headerTextColorState, setHeaderTextColorState] = useState('default');

  // function increaseValue() {
  //   const updateCountState = countState + 1;
  //   setCountState(updateCountState);
  // }



  // useEffect(() => {
  //   console.log("I'm rendering or rerendering")
  // }, [])

  function changeHeaderTextColor() {
    if(headerTextColorState === 'default') {
      setHeaderTextColorState('yellow')
    } else if (headerTextColorState === 'yellow'){
      setHeaderTextColorState('red')
    } else {
      setHeaderTextColorState('default')
    }
  }

  return (
    <div>
      {/* <HeaderText huntersHeaderCustomTextValue="Welcome to Hunter's homepage :_" textColor={headerTextColorState} />
      {/* <NavLink to='/help' >Help Page </NavLink> */}
      {/* <button onClick={changeHeaderTextColor}>Change Header Text Color</button>
      <h2>Count Tracker</h2>
      
      <button onClick={increaseValue}>Click here to increment value</button> */}
      <h3>Underlined Click Tracker: {countState}</h3>
      <BorderText borderTextValue={83}/>

      <BorderText borderTextValue={100}/>

      <BorderText borderTextValue={101}/>
      <BorderText borderTextValue={13234234}/>
      <BorderText borderTextValue={'baaababa'}/>
      {/* <App2 inheritedCountState={countState} /> */}
    </div>
  );
}


export function App2(props) {
  let [countState, setCountState] = useState(0);

  return (
  <div>
    <HeaderText textColor={'red'} huntersHeaderCustomTextValue='This is a Test, please look away :/' />
    <h4>Hello from App2: {countState}</h4>
  
  </div>)

}

export function doThing1() {

  let randomNumber = Math.random();

}

export function doThing2() {

  let randomNumber = Math.random();

  return randomNumber;
}


doThing1()
const number1 = doThing2();
const number2 = doThing2();

// export default function App() {
//   const [countState, setCountState] = useState(15);

//   let countTracker = 10;

//   function increaseValue() {
//     console.log(countTracker);

//     let countStateSquare = countState * countState

//     setCountState('banan')

//     countTracker = countTracker + 1;
//   }

//   return (<div>
//     <h1>Welcome to my website </h1>
//     <div>It's a pleasure to meet you.  Counts: {countTracker}</div>
//     <div>Count with State: {countState}</div>
//     <button onClick={increaseValue}>Increase Count</button>
//   </div>)
// }


// let timeInSeconds = new Date().getSeconds();


// function getTimeInExclamation() {
//   return timeInSeconds + " is the number of seconds after the minute";
// }
