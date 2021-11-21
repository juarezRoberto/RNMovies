import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigation } from './src/navigation/RootStackNavigation';
import UserStateProvider from './src/providers/UserStateProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <UserStateProvider>
        <NavigationContainer>
          <RootStackNavigation />
        </NavigationContainer>
      </UserStateProvider>
    </ReduxProvider>
  );
};

export default App;
