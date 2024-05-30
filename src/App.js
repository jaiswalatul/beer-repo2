import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beers</h1>
      <input
        type="text"
        placeholder="Search for beers"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="beer-container">
        {filteredBeers.map(beer => (
          <div key={beer.id} className="beer-card">
            <img src={beer.image} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
            <p>Price:{beer.price}</p>
            <p>Average:{beer.rating.average}</p>
            <p>Reviews:{beer.rating.reviews}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
