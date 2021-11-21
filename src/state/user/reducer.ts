import produce from 'immer';
import { UserActions } from './actions';

type State = {
  user: any;
  username?: string;
};

export const initialState: State = {
  user: null,
  username: undefined,
};

export const reducer = (state: State, action: UserActions) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'setUser': {
        draft.user = action.payload;
        return;
      }
      case 'setUsername': {
        draft.username = action.payload;
        return;
      }
      case 'removeUser': {
        draft.user = null;
        return;
      }
      default:
        return;
    }
  });
};
