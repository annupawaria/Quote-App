import React from 'react'

const QuoteCard = ({ quote ,onSave,fetchQuote}) => {
  return (
    <div>
    <div style={{ border: "2px solid grey", padding: "20px", textAlign: 'center ', marginBottom: "20px", backgroundColor: 'grey' }}>
      <p>{quote}</p>
      <button onClick={onSave}>Save Quote</button>
     
    </div>
     <button onClick={fetchQuote}> Get New Quote</button>
     </div>
  )
}

export default QuoteCard