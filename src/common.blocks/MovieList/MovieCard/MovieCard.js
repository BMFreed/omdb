function MovieCard(props) {
    const handleClose = (event) => {
        event.preventDefault();
        props.setMovie(null);
    };

    return (
        <section className="movie-card">
            <div className="movie-card__content">
                <h2 className="movie-card__title">{props.movie.Title}</h2>
                <div className="movie-card__wrapper">
                    <img src={props.movie.Poster} alt={`${props.movie.Title} poster`} />
                    <div className="movie-card__right-content">
                        <span>
                            <b>{props.movie.Type}</b>
                        </span>
                        <span>
                            <b>Year of release:</b> {props.movie.Year}
                        </span>
                        <span style={{ textTransform: "unset" }}>
                            <b>ImDB ID:</b> {props.movie.imdbID}
                        </span>
                        <p>Description not provided by the API.</p>
                    </div>
                </div>
                <a href="/" className="movie-card__close-button" onClick={handleClose}>
                    <img src={process.env.PUBLIC_URL + "/img/Movies/close.png"} alt="close" />
                </a>
            </div>
            <div className="movie-card__background"></div>
        </section>
    );
}

export default MovieCard;
