import * as React from "react";
import useHallPass, { Permission } from "./useHallPass";

interface IProps {
  fallbackUI?: React.ReactElement;
  requiredPermissions: Permission | Permission[];
  userPermissions: Permission | Permission[];
}

const HallPass: React.FC<IProps> = ({
  children,
  fallbackUI,
  requiredPermissions,
  userPermissions
}) => {
  const showChildren = useHallPass(userPermissions, requiredPermissions);

  if (showChildren) {
    if (children) {
      return children as React.ReactElement<any>;
    }
    // throwing an error is too harsh??
    console.warn("You probably want to supply children to HallPass");
    return null;
  }

  if (fallbackUI) {
    if (React.isValidElement(fallbackUI)) {
      return fallbackUI;
    }
    console.warn("Make sure the fallback UI is a valid React element");
    return null;
  }

  return null;
};

export default HallPass;
