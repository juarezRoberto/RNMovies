import { useEffect, useState } from 'react';
import axiosInstance from '../api/movie.api';
import { Cast, CreditsResponse } from '../types/credits.types';
import { Movie } from '../types/movie.types';

type MovieDetails = {
  isLoading: boolean;
  movieFull?: Movie;
  cast: Cast[];
};

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = axiosInstance.get<Movie>(`/${movieId}`);
    const castPromise = axiosInstance.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
