import React, { useState, useEffect } from 'react';
import { fetchMatches } from './services/api';
import { SelectionProvider } from './context/SelectionContext';
import Table from './components/Table';
import SelectedItems from './components/SelectedItem';
import LoadingSkeleton from './components/LoadingSkeleton';
import './App.css'; 

const App = () => {
  const [data, setData] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 20;

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const allData = await fetchMatches();
      setData(allData);
      setMatches(allData.slice(0, itemsPerPage));
      setLoading(false);
    };

    loadData();
  }, []);

  const loadMoreData = () => {
    if (matches.length >= data.length) {
      setHasMore(false);
      return;
    }

    setMatches((prevData) => [
      ...prevData,
      ...data.slice(prevData.length, prevData.length + itemsPerPage),
    ]);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && hasMore) {
      loadMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, matches]);

  return (
    <SelectionProvider>
      <div className="App">
        {loading ? (
         <LoadingSkeleton/>
        ) : (
          <>
            <Table matches={matches} />
            <SelectedItems />
          </>
        )}
      </div>
    </SelectionProvider>
  );
};

export default App;
