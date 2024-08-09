import React from 'react'

const SavedQuotes = ({quote}) => {
  return (
    <div style={{}}>
      <p>Saved Quote</p>
      {quote.map((q,index)=>{
        <div key={index} 
        style={{border: "2px solid grey", padding: "20px", textAlign: 'center ', marginBottom: "20px", backgroundColor: 'grey'}}>

{q}


        </div>
      })}




      <h1>Not any quote saved yet</h1>
    </div>
  )
}

export default SavedQuotes