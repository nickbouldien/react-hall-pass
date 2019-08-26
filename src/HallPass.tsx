import * as React from "react";
import useHallPass, { Permission } from "./useHallPass";

interface IProps {
  exceptions?: Permission | Permission[];
  fallbackUI?: React.ReactElement;
  requiredPermissions: Permission | Permission[];
  userPermissions: Permission | Permission[];
}

const HallPass: React.FC<IProps> = ({
  children,
  exceptions,
  fallbackUI,
  requiredPermissions,
  userPermissions
}) => {
  const passesChecks = useHallPass(
    userPermissions,
    requiredPermissions,
    exceptions
  );

  if (passesChecks) {
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
