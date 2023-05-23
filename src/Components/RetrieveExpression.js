import React from 'react'

function RetrieveExpression() {
  return (
    <div>
        <button onClick={()=>{
            document.getElementById('display').innerHTML=window.sessionStorage.getItem('last-expression')
        }}>Retrieve last expression</button>
    </div>
  )
}

export default RetrieveExpression