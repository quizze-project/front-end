import UserActions from "../actions/UserActions";

export interface User {
  id?: number;
  name?: string;
}

const INITIAL_STATE: User = { id: 1, name: 'Dery' };

const UserReducer = (
  user: User = INITIAL_STATE,
  action: UserActions
): User => {
  switch(action.type) {
    case "LOGIN":
      const { id, name } = action;
      return { id, name };
    case "LOGOUT":
      return INITIAL_STATE;
  }

  return user;
}

export default UserReducer;