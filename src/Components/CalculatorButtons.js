import React from 'react'

function CalculatorButtons() {

    
  return (
    <div className='calculatorButtons'>
        <div className='calculatorButtonRow'>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='7'
            }}>7</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='8'
            }} >8</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='9'
            }} >9</button>
            <button type="button" class="calculator-button" onClick={()=>{
               let text= document.getElementById('display').innerHTML
               let newText=text.substring(0,text.length-1)
               document.getElementById('display').innerHTML=newText
            }} onDoubleClick={()=>{
                document.getElementById('display').innerHTML=''                
            }} >Del/C</button>
        </div>
        <div className='calculatorButtonRow'>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='4'
            }}>4</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='5'
            }}>5</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='6'
            }}>6</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='*'
            }}>*</button>
        </div>
        <div className='calculatorButtonRow'>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='1'
            }}>1</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='2'
            }}>2</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='3'
            }}>3</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='/'
            }}>/</button>  
        </div>
        <div className='calculatorButtonRow'>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='0'
            }}>0</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='+'
            }}>+</button>
            <button type="button" class="calculator-button" onClick={()=>{
                document.getElementById('display').innerHTML+='-'
            }}>-</button>
            <button type="button" class="calculator-button" onClick={()=>{
                window.sessionStorage.setItem('last-expression',document.getElementById('display').innerHTML)
                document.getElementById('display').innerHTML=eval(document.getElementById('display').innerHTML)
            }}>=</button>
        </div>
    </div>
  )
}

export default CalculatorButtons