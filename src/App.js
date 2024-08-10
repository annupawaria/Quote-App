import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './QuoteCard';
import SavedQuotes from './SavedQuotes';

const App = () => {
  const [quote,setQuote]=useState("")
  const [savedQuote,setSavedQuotes]=useState([])

  useEffect(()=>{
    fetchQuote()
  },[])

  const fetchQuote= async()=>{
    try {
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    setQuote(response.data[0])
  }
 catch(error){
  console.log('error')
}}

const saveQuote = () => {
  setSavedQuotes([...savedQuote, quote]);
};



  return (
    <div style={{padding:'20px',textAlign:"center"}}>
      <h1 >
      Random Ron Swanson Quote
      </h1>
      <QuoteCard quote={quote} onSave={saveQuote} fetchQuote={fetchQuote}/>
<SavedQuotes quotes={savedQuote}/>

    </div>
  )
}

export default App