import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ShowList from './components/showList';
import ShowDetail from './components/showDetail';
import Error from './components/error';

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      setShows(data.map(result => result.show));
      setError('');
    } catch (error) {
      setError('Failed to fetch shows');
    }
  };

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <Error message={error} />}
      <ShowList shows={shows} onShowSelect={handleShowSelect} />
      <ShowDetail show={selectedShow} />
    </div>
  );
};

export default App;
