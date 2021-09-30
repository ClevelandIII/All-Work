import React from "react";
//useParams gives us the variable from the url
//by looking for the colon in the route (in App.jsx)
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../util/useFetch";

const naurl = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, error, movies: movie } = useFetch(`i=${id}&`);

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    );
  }
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Writer: writer,
  } = movie;

  return (
    <section className="single-movie">
      <img src={poster === 'N/A' ? naurl : poster } alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <p>{writer}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
