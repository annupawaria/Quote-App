import React from 'react'

const QuoteCard = ({ quote ,onSave}) => {
  return (
    <div>
    <div style={{ border: "2px solid grey", padding: "20px", textAlign: 'center ', marginBottom: "20px", backgroundColor: 'grey' }}>
      <p>{quote}</p>
      <button >Save Quote</button>
     
    </div>
     <button>Get New Quote</button>
     </div>
  )
}

export default QuoteCard