import { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";

const MovieList = (props) => {
    const [movie, setMovie] = useState(null);

    const handleMovie = (event) => {
        let title = event.currentTarget.innerText.split("\n")[0];
        for (let i = 0; i < props.movies.length; i++) {
            if (props.movies[i].Title === title) {
                setMovie(props.movies[i]);
            }
        }
    };

    return (
        <>
            {movie ? <MovieCard movie={movie} setMovie={setMovie}/> : null}
            <section className="movielist section">
                <div className="movielist__wrapper">
                    {!props.resolved ? (
                        <p className="movielist__message">Loading...</p>
                    ) : props.movies && props.movies.length !== 0 ? (
                        props.movies.map((movie, index) => (
                            <div className="movie" key={index} onClick={handleMovie}>
                                <div className="movie__wrapper">
                                    <div className="movie__poster">
                                        <img
                                            className="movie__img"
                                            src={movie.Poster}
                                            alt={movie.Title}
                                        />
                                    </div>
                                    <div className="movie__info">
                                        {props.Test}
                                        <span className="movie__title">{movie.Title}</span>
                                        <div className="movie__details">
                                            <span className="movie__year">{movie.Year}</span>
                                            <span className="movie__type">{movie.Type}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="movielist__message">
                            Sorry, we couldn't find anything based on your request!
                        </p>
                    )}
                </div>
            </section>
        </>
    );
};

export default MovieList;
