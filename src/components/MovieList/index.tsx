"use client";
import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Movie } from "@/types/movie";
import MovieCard from "../MovieCard";

export interface MovieType {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: apiKey,
        language: "en-US",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
