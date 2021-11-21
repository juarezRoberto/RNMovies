import React, { FC } from 'react';
import { context, useUserContext } from '../hooks/useUserState';

const UserStateProvider: FC<{}> = ({ children }) => {
  const userContext = useUserContext();

  return <context.Provider value={userContext}>{children}</context.Provider>;
};

export default UserStateProvider;
