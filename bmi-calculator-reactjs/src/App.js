import React from 'react'

const App = () => {
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: 80Kg</p>
        <input className='input-slider' type='range' step='1' min='40' max='200'/>

        <p className='slider-output'>Height: 180cm</p>
        <input className='input-slider' type='range'/>
      </div>

      <div className='output-section'>
        <p>Your BMI </p>
        <p className='output'>100</p>
      </div>
    </main>
  )
}

export default App