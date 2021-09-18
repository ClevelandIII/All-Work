import React from "react";
import { useMovieContext } from "../util/Context";
import { Link } from "react-router-dom";

const naurl = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
// const naurl = 'https://www.imdb.com/title/tt9881584/mediaviewer/rm2185537281/'

const Movies = () => {
  const { movies, loading } = useMovieContext();

  if (loading) {
    return <div className="loading"></div>;
  } 

  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

        return (
          <Link to={`/movies/${id}`} key={id} className='movie'>
            <article>
              <img src={poster === 'N/A' ? naurl : poster } alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );

  return <div></div>;
};

export default Movies;
