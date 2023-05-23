import React from 'react'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorButtons from './CalculatorButtons'

function Calculator() {
  return (
    <div>
      <div className='calculatorDiv'>
          <CalculatorDisplay/>
          <CalculatorButtons/>
      </div>
    </div>
  )
}

export default Calculator