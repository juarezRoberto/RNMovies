type SetUser = {
  type: 'setUser';
  payload: any;
};

type SetUsername = {
  type: 'setUsername';
  payload: string;
};

type RemoveUser = {
  type: 'removeUser';
};

export type UserActions = SetUser | SetUsername | RemoveUser;
