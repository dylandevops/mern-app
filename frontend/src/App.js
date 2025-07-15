import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [newQuoteText, setNewQuoteText] = useState('');
  const [newQuoteAuthor, setNewQuoteAuthor] = useState('');

  // Function to fetch quotes from the backend
  const fetchQuotes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/quotes');
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  // Function to add a new quote
  const addQuote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newQuoteText, author: newQuoteAuthor }),
      });
      const newQuote = await response.json();
      setQuotes([...quotes, newQuote]);
      setNewQuoteText('');
      setNewQuoteAuthor('');
    } catch (error) {
      console.error('Error adding quote:', error);
    }
  };

  // Fetch quotes when the component mounts
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack Quotes App</h1>
        <div className="quotes-container">
          {quotes.length > 0 ? (
            quotes.map((quote) => (
              <div key={quote._id} className="quote-card">
                <p>"{quote.text}"</p>
                <cite>- {quote.author}</cite>
              </div>
            ))
          ) : (
            <p>No quotes found. Add one!</p>
          )}
        </div>

        <form onSubmit={addQuote} className="add-quote-form">
          <input
            type="text"
            value={newQuoteText}
            onChange={(e) => setNewQuoteText(e.target.value)}
            placeholder="Enter quote text"
            required
          />
          <input
            type="text"
            value={newQuoteAuthor}
            onChange={(e) => setNewQuoteAuthor(e.target.value)}
            placeholder="Enter author name"
            required
          />
          <button type="submit">Add Quote</button>
        </form>
      </header>
    </div>
  );
}

export default App;
