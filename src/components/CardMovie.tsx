import { NavigationProp, useNavigation } from '@react-navigation/core';
import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamsList } from '../navigation/RootStackNavigation';
import { Movie } from '../types/movie.types';

type Props = {
  movie: Movie;
  height?: number;
  width?: number;
};

const CardMovie: FC<Props> = ({ movie, height = 420, width = 300 }) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation<NavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', { movie })}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5,
      }}>
      <View style={styles.imgContainer}>
        <Image source={{ uri }} style={styles.img} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
  },
  img: {
    flex: 1,
    borderRadius: 10,
  },
});

export default CardMovie;
