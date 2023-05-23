import React from 'react'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorButtons from './CalculatorButtons'
import RetrieveExpression from './RetrieveExpression'

function Calculator() {
  return (
    <div>
      <div className='calculatorDiv'>
          <CalculatorDisplay/>
          <CalculatorButtons/>
          <RetrieveExpression/>
      </div>
    </div>
  )
}

export default Calculator