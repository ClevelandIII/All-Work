import { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&`;

//query is the s = Kimetsu
export const useFetch = (query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);

  //url is a var that takes in the endpoint and the query
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${query}`);
    fetchMovies(`${API_ENDPOINT}${query}`);
  }, [query]);

  return { loading, error, movies };
};
