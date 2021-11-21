import React, { FC } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../types/movie.types';
import CardMovie from './CardMovie';

type Props = {
  title?: string;
  movies: Movie[];
};

export const HorizontalSlider: FC<Props> = ({ title, movies }) => (
  <View style={{ height: title ? 260 : 220 }}>
    {title && <Text style={styles.title}>{title}</Text>}
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <CardMovie movie={item} width={140} height={200} />
      )}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginStart: 5,
  },
});
