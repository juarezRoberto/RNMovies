import { useEffect, useState } from 'react';
import axiosInstance from '../api/movie.api';
import { Movie, MovieDBMoviesResponse } from '../types/movie.types';

type MoviesState = {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
};

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const resp = await Promise.all([
      axiosInstance.get<MovieDBMoviesResponse>('/now_playing'),
      axiosInstance.get<MovieDBMoviesResponse>('/popular'),
      axiosInstance.get<MovieDBMoviesResponse>('/top_rated'),
      axiosInstance.get<MovieDBMoviesResponse>('/upcoming'),
    ]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[0].data.results,
      topRated: resp[0].data.results,
      upcoming: resp[0].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return { ...moviesState, isLoading };
};
