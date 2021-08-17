const MovieList = (props) => {
    console.log(props.movies);
    return (
        <section className="movielist section">
            <div className="movielist__wrapper">
                {props.movies.length !== 0 ? (
                    props.movies.map((movie, index) => (
                        <div className="movie" key={index}>
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
                    <p className="movielist__error">Sorry, we couldn't find anything based on your request!</p>
                )}
            </div>
        </section>
    );
};

export default MovieList;
