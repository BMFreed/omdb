import React, { useState, useEffect } from 'react';

import './styles/normalize.css';
import './styles/App.sass';

import Header from './Header/Header';
import './styles/Header.sass';

import MovieList from './MovieList/MovieList'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [typedValue, setTypedValue] = useState('');

  const handleInput = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setSearchValue(value);
  }

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=68fec587`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
    setMovies(responseJson.Search);
    }
  }

  useEffect (()=> {
      getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} typedValue={typedValue} setTypedValue={setTypedValue}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;