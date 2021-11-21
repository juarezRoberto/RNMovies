import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import CardMovie from '../components/CardMovie';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch';
import { useMovies } from '../hooks/useMovies';
import { useUserState } from '../hooks/useUserState';
import { RootStackParamsList } from '../navigation/RootStackNavigation';
import { RootState } from '../store';
import { selectCounter } from '../store/selectors/counter.selectors';
import { increment, incrementByAmount } from '../store/slices/counter.slices.';

const { width: windowWidth } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>;

const HomeScreen: FC<Props> = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { state, setUsername } = useUserState();

  const dispatch = useAppDispatch();
  const selectState = useAppSelector(selectCounter);
  console.log('selectCount', selectState);

  const onClick = () => dispatch(incrementByAmount(5));

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="teal" size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <Button title="add counter" onPress={onClick} />
      <View style={{ marginTop: top + 20 }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <CardMovie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
