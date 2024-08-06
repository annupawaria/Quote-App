import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import SavedQuotes from './SavedQuotes';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Random Ron Swanson Quote</h1>
      {/* <QuoteCard quote={quote} onSave={saveQuote} /> Ensure this is correct */}
      <button onClick={fetchQuote}>Get New Quote</button>
      <SavedQuotes quotes={savedQuotes} />
    </div>
  );
}

export default App;
