import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {

  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(140);

  function onWeightChange(event){
    setWeight(event.target.value)
  }
  function onHeightChange(event){
    setHeight(event.target.value)
  }

  const output = useMemo(()=>{
    const calculateHeight = height/100;
    
    return (weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
      <div class='categories'>
    <p class='p-categories'>
        <h3>BMI CATEGORIES</h3> <br />
        <span>Under Weight:</span> &lt; 18.5 <br />
        <span>Normal Weight:</span> 18.5–24.9<br />
        <span>Over Weight:</span> 25–29.9<br />
        <span>Obesity:</span> BMI of 30 or greater <br />
    </p>
</div>
        <p className='slider-output'>WEIGHT : <span>{weight}Kg</span></p>
        <input className='input-slider' type='range' step='1' min='30' max='250' onChange={onWeightChange}/>

        <p className='slider-output'>HEIGHT : <span>{height}cm</span></p>
        <input className='input-slider' type='range' min='80' max='250' onChange={onHeightChange}/>
      </div>

      <div className='output-section'>
        <p>Your BMI </p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App