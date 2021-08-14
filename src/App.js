import React, { useState, useEffect } from "react";

import "./normalize.css";
import "./App.sass";

import Header from "./common.blocks/Header/Header";
import MovieList from "./common.blocks/MovieList/MovieList";
import Footer from "./common.blocks/Footer/Footer";

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("Spider-man");
    const [type, setType] = useState("");

    useEffect(() => {
        const getMovieRequest = async (searchValue) => {
            const url = `http://www.omdbapi.com/?s=${searchValue}&type=${type}&apikey=68fec587`;
            const response = await fetch(url);
            const responseJson = await response.json();

            if (responseJson.Search) {
                setMovies(responseJson.Search);
            }
        };
        getMovieRequest(searchValue, type);
    }, [searchValue, type]);

    return (
        <div className="wrapper">
            <Header
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                type={type}
                setType={setType}
            />
            <MovieList movies={movies} />
            <Footer />
        </div>
    );
}

export default App;
