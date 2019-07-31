import * as React from "react";
import { Action, State, permissionReducer } from "./permissionReducer";

type Dispatch = (action: Action) => void;

const StateContext = React.createContext<State | undefined>(undefined);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined);

let initialState: State = {
  permissions: [],
  userPermissions: []
};

function PermissionProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = React.useReducer(permissionReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function usePermissionState() {
  const context = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("usePermissionState must be used within a Provider");
  }
  return context;
}

function usePermissionDispatch() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("usePermissionDispatch must be used within a Provider");
  }
  return context;
}

export { PermissionProvider, usePermissionState, usePermissionDispatch };
