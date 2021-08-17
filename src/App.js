import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./normalize.css";
import "./App.sass";

import Header from "./common.blocks/Header/Header";
import Home from "./common.blocks/Home/Home";
import MovieList from "./common.blocks/MovieList/MovieList";
import Footer from "./common.blocks/Footer/Footer";

function App() {
    const [movies, setMovies] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [type, setType] = useState("");
    const [resolved, setResolved] = useState(false);

    useEffect(() => {
        const getMovieRequest = async (searchValue, type) => {
            const url = `http://www.omdbapi.com/?s=${searchValue}&type=${type}&apikey=68fec587`;
            const response = await fetch(url);
            const responseJson = await response.json();
            if (responseJson.Response === "True") {
                setResolved(true);
            }
            else {
                setResolved(false);
            }
            if (responseJson.Search) {
                setMovies(responseJson.Search);
            } else {
                setMovies([]);
            }
        };
        getMovieRequest(searchValue, type);
    }, [searchValue, type]);

    return (
        <Router>
            <div className="wrapper">
                <Header
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    type={type}
                    setType={setType}
                />
                <Switch>
                    <Route exact path={["/home", "/"]}>
                        <Home />
                    </Route>
                    <Route path="/search">
                        <MovieList movies={movies} resolved={resolved} />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
