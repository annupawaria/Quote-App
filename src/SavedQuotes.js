import React from 'react';

function SavedQuotes({ quotes }) {
  return (
    <div>
      <h2>Saved Quotes</h2>
      {quotes.length === 0 ? (
        <p>No quotes saved yet.</p>
      ) : (
        quotes.map((q, index) => (
          <div key={index} style={{
            border: '1px solid #ddd', 
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#fff'
          }}>
            {q}
          </div>
        ))
      )}
    </div>
  );
}

export default SavedQuotes;