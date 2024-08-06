import React from 'react';

function QuoteCard({ quote, onSave }) {
  return (
    <div style={{
      border: '1px solid #ddd', 
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: '#f9f9f9'
    }}>
      <p>{quote}</p>
      <button onClick={onSave}>Save Quote</button>
    </div>
  );
}

export default QuoteCard;
