import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./normalize.css";
import "./App.sass";

import Header from "./common.blocks/Header/Header";
import Home from "./common.blocks/Home/Home";
import MovieList from "./common.blocks/MovieList/MovieList";
import Footer from "./common.blocks/Footer/Footer";
import Modal from "./common.blocks/Modal/Modal";

function App() {
    const [movies, setMovies] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [type, setType] = useState("");
    const [resolved, setResolved] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const getMovieRequest = async (searchValue, type) => {
            const url = `http://www.omdbapi.com/?s=${searchValue}&type=${type}&apikey=68fec587`;
            const response = await fetch(url);
            const responseJson = await response.json();
            if (responseJson.Response === "True" || responseJson.Error) {
                setResolved(true);
            } else {
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


    //This effect saves the user's query in localStorage after page reload.
    useEffect(() => {
        const getQuery = async () => {
            const query = localStorage.getItem("searchQuery");
            if (query) {
                setSearchValue(query);
            }
        };
        getQuery();
    }, []);

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
                <Footer setModal={setModal} />
                {modal && <Modal modal={modal} setModal={setModal} />}
            </div>
        </Router>
    );
}

export default App;
