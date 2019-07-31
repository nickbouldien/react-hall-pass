// import * as React from "react";
import { Permission } from "./useHallPass";

export type State = {
  permissions: Permission[] | [];
  userPermissions: Permission[] | [];
};

export type Action =
  | { type: "ADD_PERMISSION"; payload: Permission }
  | { type: "ADD_USER_PERMISSION"; payload: Permission }
  | { type: "REMOVE_PERMISSION"; payload: Permission }
  | { type: "REMOVE_USER_PERMISSION"; payload: Permission };

export const permissionReducer: React.Reducer<State, Action> = (
  state: State,
  action: Action
): State => {
  switch (action.type) {
    case "ADD_USER_PERMISSION":
      return {
        ...state
      };
    case "REMOVE_USER_PERMISSION":
      return {
        ...state
      };
    /* app permissions */
    case "ADD_PERMISSION":
      return {
        ...state
      };
    case "REMOVE_PERMISSION":
      return {
        ...state
      };
    default:
      return state;
  }
};

// export default () => useReducer(reducer, initialState);
