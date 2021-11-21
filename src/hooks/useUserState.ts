import React, { useCallback, useContext, useReducer } from 'react';
import { initialState, reducer } from '../state/user/reducer';

export const useUserContext = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = useCallback((payload: any) => {
    dispatch({ type: 'setUser', payload });
  }, []);

  const setUsername = useCallback((payload: string) => {
    dispatch({ type: 'setUsername', payload });
  }, []);

  const removeUser = useCallback(() => {
    dispatch({ type: 'removeUser' });
  }, []);

  return { state, setUser, setUsername };
};

type UserContext = ReturnType<typeof useUserContext>;

export const context = React.createContext({} as UserContext);

export const useUserState = () => useContext(context);

export const useUserUsername = () => {
  const { state } = useUserState();
  return state.username;
};
