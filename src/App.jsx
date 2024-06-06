import { useState } from 'react'
import './App.css'
import React from 'react';

function App() {

  const [weight, setweight]= useState(0);
  const [height, setheight]= useState(0);
  const [bmi, setbmi]= useState(0);
  const [message, setmessage]= useState('');

  const calbmi = (e) =>
    {
      e.preventDefault();

      if ( weight===0 || height===0)
        {
          alert("Please enter valid data.");
        }
      else
      {
        const bmi = ((weight/(height*height)));
        setbmi(bmi.toFixed(1));
       
        if (bmi<25)
          {
            setmessage('You are underweight!')
          }
          else if(bmi>25 || bmi<30)
          {
            setmessage('You are health!')
          }
          else
          {
            setmessage('You are overweight!')
          }
      }
    }

    const reload = () =>
      {
        window.location.refresh(); 
      }

    return (
    <>
     <h1>BMI Calculator</h1>
     <form>
      <div>
      <label>Height (m)</label>
      <input type ='textbox' placeholder='Enter Height (m)' value={height} onChange={(e)=> setheight(e.target.value)}/> <br/>
      </div>
      <div>
      <label>Weight (lb)</label>
      <input type ='textbox' placeholder='Enter Weight (lb)' value={weight} onChange={(e) => setweight(e.target.value)}/> <br/>
      </div>
      <div>
      <button onClick={calbmi}>Submit</button>
      <button onClick={reload}>Refresh</button>
      </div>
      <div>
        <h2>Your BMI is : {bmi} </h2>
        <h3> {message} </h3>
      </div>
     </form>
    </>
  )
}

export default App;


