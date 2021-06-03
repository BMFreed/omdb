import React from 'react';

const MovieList = (props) => {
    return (
        <section className="movielist">
            <div className="movielist__wrapper">
                {props.movies.map((movie, index) => (
                    <div className="movie" key={index}>
                        <div className="movie__wrapper">
                            <img 
                                className="movie__poster" 
                                src={movie.Poster} 
                                alt={movie.Title} />
                            <div className="movie__info">
                                <span className="movie__title">{movie.Title}</span>
                                <span className="movie__year">{movie.Year}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MovieList;